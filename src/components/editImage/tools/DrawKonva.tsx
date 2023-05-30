import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { Stage } from 'react-konva'
import "cropperjs/dist/cropper.css";
import Crop from './typeEdit/Crop';
import DrawMask from './typeEdit/DrawMask';
import { Lines, Size, Url } from '../../../models';

interface IProps {
  data?: Url,
  type: string,
  open?: boolean,
  color: string,
  slider: number,
  typeRect: string,
  prevLines?: Lines[],
  urlUploaded?: string,
  isFullScreen: boolean,
  sizeImage: Size | undefined,
  setPrevLines: Dispatch<SetStateAction<Lines[]>>,
  setUrlUploaded?: Dispatch<SetStateAction<string>>,
}

const DrawKonva = ({ prevLines, setPrevLines, sizeImage, open, data, color, slider, urlUploaded, isFullScreen, setUrlUploaded, type, typeRect }: IProps) => {

  const stageRef = useRef(null);
  const [image, setImage] = useState<HTMLImageElement>()
  const contentImg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.crossOrigin = 'anonymous'
    if (data && data.file)
      img.src = data.file
    else if (urlUploaded)
      img.src = urlUploaded;
    setImage(img)
  }, [urlUploaded, isFullScreen, sizeImage])

  // const download = () => {
  //   // get list points
  //   const children = stageRef.current?.getChildren()[0].children
  //   const points: Point[] = []
  //   children.map((item: Line) =>
  //     item.attrs.points && points.push({
  //       strokeWidth: item.attrs.strokeWidth,
  //       points: item.attrs.points,
  //     })
  //   );

  //   // Stage
  //   const stage = new Konva.Stage({
  //     container: 'drawMask',
  //     width: 500,
  //     height: 500
  //   });

  //   // Layer
  //   const layer = new Konva.Layer();
  //   stage.add(layer);

  //   // Line
  //   const listLine: any = []
  //   points.map((item: Point) => listLine.push(new window.Konva.Line({
  //     points: item.points,
  //     stroke: '#fff',
  //     strokeWidth: item.strokeWidth,
  //     tension: 0.5,
  //     lineCap: "round"
  //   })))

  //   // Add Line
  //   listLine.map((item: any) => layer.add(item))

  //   layer.draw();

  //   const url = stage.toDataURL()


  // }

  return (
    <div className='w-full h-full relative' ref={contentImg}>
      {
        typeRect === 'Crop' ? (
          <Crop
            setUrlUploaded={setUrlUploaded}
            urlUploaded={urlUploaded}
            width={contentImg.current?.clientWidth}
            height={contentImg.current && sizeImage ?
              (contentImg.current?.clientWidth / sizeImage?.width) * sizeImage?.height
              : 0
            }
          />
        ) : (
          <Stage
            width={contentImg.current?.clientWidth}
            height={contentImg.current && sizeImage ?
              (contentImg.current?.clientWidth / sizeImage?.width) * sizeImage?.height
              : 0
            }
            ref={stageRef}
          >
            {
              typeRect === 'MouseDraw' && (
                <DrawMask
                  type={type}
                  data={data}
                  image={image}
                  color={color}
                  slider={slider}
                  prevLines={prevLines}
                  setPrevLines={setPrevLines}
                  sizeImage={sizeImage}
                  width={contentImg.current?.clientWidth}
                  height={contentImg.current && sizeImage ?
                    (contentImg.current?.clientWidth / sizeImage?.width) * sizeImage?.height
                    : 0
                  }
                />
              )
            }
          </Stage>
        )
      }
    </div>
  )
}

export default DrawKonva