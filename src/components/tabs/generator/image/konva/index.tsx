import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { Stage } from 'react-konva'
import "cropperjs/dist/cropper.css";
import Crop from './type/Crop';
import DrawMask from './type/DrawMask';
import { Lines } from '../../../../../models';

interface IProps {
  type: string,
  color: string,
  lines: Lines[],
  slider: number,
  isOpen: boolean,
  typeRect: string,
  urlUploaded: string,
  isFullScreen: boolean,
  setLines: Dispatch<SetStateAction<Lines[]>>,
  setUrlUploaded: Dispatch<SetStateAction<string>>
}

const Konva = ({ isOpen, color, slider, urlUploaded, lines, setLines, isFullScreen, setUrlUploaded, type, typeRect }: IProps) => {

  const stageRef = useRef(null);
  const contentImg = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<HTMLImageElement>()

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.crossOrigin = 'anonymous'
    img.src = urlUploaded
    setImage(img)
  }, [urlUploaded, isFullScreen, isOpen])

  return (
    <div className='w-full h-96 relative rounded-lg overflow-hidden' ref={contentImg}>
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
                  lines={lines}
                  setLines={setLines}
                  isOpen={isOpen}
                  color={color}
                  image={image}
                  slider={slider}
                  stageRef={stageRef}
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