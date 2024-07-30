import { random } from "lodash";
import { useEffect, useRef, useState } from "react";
import { Header } from "./components/header";
import ImagePreview from "./components/preview";
import { Library } from "./components/share/library";
import { useStores } from "./hooks/useStores";
import { Footer } from "./components/footer";
const images = [
  {
    id: "1",
    title: "Cute Corgi dog with headphones on white background",
    url: "https://picsum.photos/602/505",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/302/95?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/205?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/305?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "2",
    url: "https://picsum.photos/602/508",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "3",
    url: "https://picsum.photos/601/609",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "4",
    url: "https://picsum.photos/604/503",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "5",
    url: "https://picsum.photos/605/501",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "6",
    url: "https://picsum.photos/607/602",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "7",
    url: "https://picsum.photos/600/503",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "8",
    url: "https://picsum.photos/600/505",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "9",
    url: "https://picsum.photos/600/299",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "10",
    url: "https://picsum.photos/602/302",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "11",
    url: "https://picsum.photos/603/303",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "12",
    url: "https://picsum.photos/604/304",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "13",
    url: "https://picsum.photos/610/305",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "14",
    url: "https://picsum.photos/640/306",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "15",
    url: "https://picsum.photos/600/397",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "16",
    url: "https://picsum.photos/510/308",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "17",
    url: "https://picsum.photos/611/309",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
  {
    title: "Cute Corgi dog with headphones on white background",
    id: "18",
    url: "https://picsum.photos/621/310",
    dimension: {
      x: 4480,
      y: 6720,
    },
    fileType: "JPEG",
    category: "Animals",
    licenseTypes: ["Standard", "Extended"],
    more: [
      {
        id: "123",
        url: "https://picsum.photos/602/305?random=1" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/302/505?random=3" + random(1, 100),
      },
      {
        id: "123",
        url: "https://picsum.photos/602/505?random=2" + random(1, 100),
      },
    ],
  },
].map((image) => ({
  ...image,
  heightSpan: random(1, 6),
}));
function App() {
  const [selectedImageId, setSelectedImageId] = useState<string>();
  const { orderStore } = useStores();
  const selectedImage = images.find((image) => image.id === selectedImageId);
  // Just a random row to make scroll effect
  const splitRow = 2;

  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedImageId !== undefined) {
      previewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedImageId, previewRef]);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    const orderId = localStorage.getItem("paymentLinkId") || "";
    orderStore.getOrder(orderId, token);
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-[#ef9854] p-6 text-xl font-bold flex items-center justify-center mt-16">
        <p>
          Get 5 images or 1 video with a free trial
          <span className="text-white border border-white rounded-full p-1 px-3 ml-3">
            Start free trial
          </span>
        </p>
      </div>
      <Library
        className="mt-16"
        images={images.slice(0, (splitRow + 1) * 3)}
        onClickImg={setSelectedImageId}
      />
      <ImagePreview
        selectedImageId={selectedImageId}
        selectedImage={selectedImage}
        previewRef={previewRef}
      />
      <Library
        className="mt-4"
        images={images.slice((splitRow + 1) * 3)}
        onClickImg={setSelectedImageId}
      />
      <Footer />
    </div>
  );
}

export default App;
