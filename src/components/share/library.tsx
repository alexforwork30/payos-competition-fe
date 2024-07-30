import clsx from 'clsx';
import { chunk } from 'lodash';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  images: {
    id: string,
    url: string,
    heightSpan: number
  }[];
  onClickImg?: (id: string) => void;
}
// Three columns of images, each column has N images with different height
export const Library = (props: Props) => {
  const cols = 3;
  const imageData = props.images.map((image, i) => ({
    ...image,
    row: i % cols
  }));
  const imageCols = chunk(imageData, Math.ceil(imageData.length / cols));
  console.debug(imageCols);
  const colSum = imageCols.map(col => col.reduce((acc, cur) => acc + cur.heightSpan, 0));
  return (
    <div
      {...props}
      className={clsx(
        "container mx-auto",
        props.className
      )}
    >
      <div className='flex gap-4 w-full'>
        {imageCols.map((col, i) => (
          <div key={i} className="flex flex-col gap-4 w-full">
            {col.map((image, j) => (
              <img
                loading='lazy'
                key={j}
                src={image.url}
                alt={image.row.toString()}
                className={`object-cover object-center w-full hover:saturate-50 duration-300 cursor-pointer hover:scale-95`}
                style={{
                  height: `calc(${props.images.length}00px * ${image.heightSpan / colSum[i]})`
                }}
                onClick={() => props.onClickImg?.(image.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
