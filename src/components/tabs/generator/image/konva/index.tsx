import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { Stage } from 'react-konva'
import "cropperjs/dist/cropper.css";
import Crop from './type/Crop';
import DrawMask from './type/DrawMask';
import { Lines, Size } from '../../../../../models';

interface IProps {
  type: string,
  color: string,
  lines: Lines[],
  slider: number,
  isOpen: boolean,
  typeRect: string,
  urlUploaded: string,
  setLines: Dispatch<SetStateAction<Lines[]>>,
  setUrlUploaded: Dispatch<SetStateAction<string>>
}

const Konva = ({ isOpen, color, slider, urlUploaded, lines, setLines, setUrlUploaded, type, typeRect }: IProps) => {

  const stageRef = useRef(null);
  const contentImg = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<HTMLImageElement>()
  const [sizeImg, setSizeImg] = useState<Size>({})

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      let size: Size = {
        width: 0,
        height: 0
      };
      size.width = img.width
      size.height = img.height

      setImage(img)
      setSizeImg(size)
    }
    img.src = urlUploaded
  }, [urlUploaded, isOpen])

  const width = contentImg.current?.clientWidth
  const height = contentImg.current && width && sizeImg ? (width / sizeImg?.width) * sizeImg?.height : 0

  return (
    <div className='w-full relative rounded-lg overflow-hidden' ref={contentImg}>
      {
        typeRect === 'Crop' ? (
          <Crop
            setUrlUploaded={setUrlUploaded}
            urlUploaded={urlUploaded}
            width={width}
            height={height}
          />
        ) : (
          <Stage
            width={width}
            height={height}
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
                  width={width}
                  height={height}
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