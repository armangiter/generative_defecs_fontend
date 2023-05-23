import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { Stage } from 'react-konva'
import "cropperjs/dist/cropper.css";
import Crop from './typeEdit/Crop';
import DrawMask from './typeEdit/DrawMask';

interface IProps {
  type: string,
  color: string,
  slider: number,
  typeRect: string,
  urlUploaded: string,
  isFullScreen: boolean,
  setUrlUploaded: Dispatch<SetStateAction<string>>,
}

const Konva = ({ color, slider, urlUploaded, isFullScreen, setUrlUploaded, type, typeRect }: IProps) => {

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
      {
        typeRect === 'Crop' ? (
          <Crop
            setUrlUploaded={setUrlUploaded}
            urlUploaded={urlUploaded}
            width={contentImg.current?.clientWidth}
            height={contentImg.current?.clientHeight}
          />
        ) : (
          <Stage
            width={contentImg.current?.clientWidth}
            height={contentImg.current?.clientHeight}
            ref={stageRef}
          >
            {
              typeRect === 'MouseDraw' && (
                <DrawMask
                  type={type}
                  image={image}
                  color={color}
                  slider={slider}
                  stageRef={stageRef}
                  isFullScreen={isFullScreen}
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