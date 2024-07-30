import { observer } from "mobx-react";
import { useState } from "react";
import { cancelOrder, createOrder, downloadOrder } from "../api/order";
import { useStores } from "../hooks/useStores";
import { Order, OrderCreateRes } from "../types/order";

interface ImagePreviewProps {
  selectedImageId?: string;
  selectedImage:
    | {
        url: string;
        id: string;
        title: string;
        dimension: { x: number; y: number };
        category: string;
        fileType: string;
        licenseTypes: string[];
        more: { url: string; id: string }[];
      }
    | undefined;
  previewRef: React.RefObject<HTMLDivElement>;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  selectedImageId,
  selectedImage,
  previewRef,
}) => {
  const [selectedLicense, setSelectedLicense] = useState<
    "standard" | "extended"
  >("standard");
  const { orderStore } = useStores();
  const { order } = orderStore;

  async function buyLicense(): Promise<void> {
    try {
      const order: OrderCreateRes = await createOrder({
        amount: 2000,
        description: "Place order for image",
      });
      localStorage.setItem("token", order.token);
      localStorage.setItem("paymentLinkId", order.paymentLink.paymentLinkId);
      window.open(order.paymentLink.checkoutUrl, "_blank");
    } catch (error) {
      console.error(error);
    }
  }

  async function cancel(order: Order): Promise<void> {
    try {
      await cancelOrder(order?.id, "User cancel order");
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }

  async function downloadResource(order: Order): Promise<void> {
    try {
      const token = localStorage.getItem("token");
      const downloadUrl = await downloadOrder(order?.id || "", token || "");
      downloadImage(downloadUrl, "test.png");
    } catch (error) {
      console.error(error);
    }
  }

  const downloadImage = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const urlBlob = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = urlBlob;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(urlBlob);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  function getActionButtons() {
    switch (order?.status) {
      case "PENDING":
        return (
          <>
            <p
              className="text-white mt-8 p-2 px-8 bg-[#EF9854] rounded-full w-fit cursor-pointer font-bold"
              onClick={() => openContinuePaymentLink(order?.id)}
            >
              Continue payment
            </p>
            <p
              className="text-white mt-8 p-2 px-8 bg-[#EF9854] rounded-full w-fit cursor-pointer font-bold"
              onClick={() => cancel(order)}
            >
              Cancel order
            </p>
          </>
        );
      case "PAID":
        return (
          <p
            className="text-white mt-8 p-2 px-8 bg-[#EF9854] rounded-full w-fit cursor-pointer font-bold"
            onClick={() => downloadResource(order)}
          >
            Download
          </p>
        );
      case "PROCESSING":
        return (
          <p className="text-white mt-8 p-2 px-8 bg-[#EF9854] rounded-full w-fit cursor-pointer font-bold">
            PROCESSING
          </p>
        );
      default:
        return (
          <p
            className="text-white mt-8 p-2 px-8 bg-[#EF9854] rounded-full w-fit cursor-pointer font-bold"
            onClick={() => buyLicense()}
          >
            Buy License
          </p>
        );
    }
  }

  function openContinuePaymentLink(paymentLinkId: string) {
    window.open(`https://pay.payos.vn/web/${paymentLinkId}`, "_blank");
  }

  return (
    <div
      className="bg-white h-fit w-full my-16 duration-500 transition-transform"
      ref={previewRef}
      style={{
        display: selectedImageId === undefined ? "none" : undefined,
        height: selectedImageId === undefined ? 0 : undefined,
        margin: selectedImageId === undefined ? 0 : undefined,
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-full gap-16">
        {/* Left */}
        {selectedImage && (
          <img
            src={selectedImage.url}
            alt={selectedImage.id}
            className="object-contain object-center w-[30rem] max-w-[30vw] h-full bg-[#dbdbdb]"
          />
        )}
        {/* Right */}
        <div className="h-full py-8">
          {/* Title */}
          <h1 className="text-2xl">{selectedImage?.title}</h1>
          {/* Info */}
          <div className="flex w-full justify-between mt-4 mb-8">
            <p className="font-bold">
              DIMENSION{" "}
              <p className="text-[#9F9F9F] font-normal">
                {selectedImage?.dimension.x} x {selectedImage?.dimension.y}
              </p>
            </p>
            <p className="font-bold">
              FILE TYPE{" "}
              <p className="text-[#9F9F9F] font-normal">
                {selectedImage?.fileType}
              </p>
            </p>
            <p className="font-bold">
              CATEGORY{" "}
              <p className="text-[#9F9F9F] font-normal">
                {selectedImage?.category}
              </p>
            </p>
            <p className="font-bold">
              LICENSE TYPE
              <p className="font-normal">
                {selectedImage?.licenseTypes.map((l) => (
                  <span
                    className="text-[#2655AF] first:before:content-none before:content-['or'] before:px-1 before:text-[#9F9F9F] cursor-pointer before:cursor-auto"
                    onClick={() => console.log(l)}
                  >
                    {l}
                  </span>
                ))}
              </p>
            </p>
          </div>
          {/* License */}
          <Option
            onClick={() => setSelectedLicense("standard")}
            active={selectedLicense === "standard"}
          >
            Standard license (Free with trial)
          </Option>
          <Option
            onClick={() => setSelectedLicense("extended")}
            active={selectedLicense === "extended"}
          >
            Extended license (US$79.99)
          </Option>
          {getActionButtons()}
          <div className="flex items-center gap-4 mt-4 font-bold">
            <button className="bg-[#F3F3F3] py-2 px-2 flex items-center gap-1">
              <img src="/images/heart.svg" />
              <span>Save to Library</span>
            </button>
            <button className="bg-[#F3F3F3] py-2 px-2 flex items-center gap-1">
              <img src="/images/download.svg" />
              <span>Download Preview</span>
            </button>
            <button className="bg-[#F3F3F3] py-2 px-2 flex items-center gap-1">
              <img src="/images/filter.svg" />
              <span>Preview Crop</span>
            </button>
            <button className="bg-[#F3F3F3] py-2 px-2 flex items-center gap-1">
              <img src="/images/file.svg" />
              <span>File #{selectedImage?.id}</span>
            </button>
          </div>
          {/* More */}
          <p className="font-bold mt-12 uppercase">More from this series</p>
          <div className="flex gap-8 mt-4 w-full justify-between">
            {selectedImage?.more.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.id}
                className="object-contain object-center w-full h-20 bg-[#dbdbdb]"
              />
            ))}
          </div>
          <p className="p-2 mt-8 bg-[#F3F3F3] text-[#9F9F9F] text-center">
            Explore More
          </p>
        </div>
      </div>
    </div>
  );
};

const Option = ({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer flex items-center gap-4 mt-4`}
  >
    <div className="w-4 h-4 border border-[#D4D4D4] bg-white p-[0.2rem] rounded-full inline-block">
      <div
        className="w-full h-full rounded-full bg-black duration-300"
        style={{
          transform: `scale(${active ? 1.3 : 0})`,
        }}
      />
    </div>
    {children}
  </div>
);

export default observer(ImagePreview);
