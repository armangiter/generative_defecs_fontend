import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { Stage } from 'react-konva'
import "cropperjs/dist/cropper.css";
import DrawLabel from './typeEdit/DrawLabel';
import Crop from './typeEdit/Crop';
import DrawMask from './typeEdit/DrawMask';

interface IProps {
  type: string,
  typeRect: string,
  urlUploaded: string,
  isFullScreen: boolean,
  setUrlUploaded: Dispatch<SetStateAction<string>>
}

const Konva = ({ urlUploaded, isFullScreen, setUrlUploaded, type, typeRect }: IProps) => {

  const stageRef = useRef(null);
  const [image, setImage] = useState<HTMLImageElement>()
  const contentImg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.crossOrigin = 'anonymous'
    img.src = urlUploaded
    setImage(img)
  }, [urlUploaded, isFullScreen])

  return (
    <div className='w-full h-full relative' ref={contentImg}>
      {/* <img src={test} className='absolute w-full z-10 left-0 top-0 h-fit' /> */}
      {
        typeRect === 'Crop' ? (
          <Crop setUrlUploaded={setUrlUploaded} urlUploaded={urlUploaded} />
        ) : (
          <Stage
            width={contentImg.current?.clientWidth}
            height={contentImg.current?.clientHeight}
            ref={stageRef}
          >
            {
              typeRect === 'MouseDraw' ? (
                <DrawMask
                  image={image}
                  stageRef={stageRef}
                  type={type}
                  width={contentImg.current?.clientWidth}
                  height={contentImg.current?.clientHeight}
                />
              ) : (
                <DrawLabel
                  type={type}
                  typeRect={typeRect}
                  image={image}
                  urlUploaded={urlUploaded}
                  width={contentImg.current?.clientWidth}
                  height={contentImg.current?.clientHeight}
                />
              )
            }
          </Stage>
        )
      }

    </div>
  )
}

export default Konva