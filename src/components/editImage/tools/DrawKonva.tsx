import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { Stage } from 'react-konva'
import "cropperjs/dist/cropper.css";
import Crop from './typeEdit/Crop';
import DrawMask from './typeEdit/DrawMask';
import { Lines, ResponseImg, Size, Url } from '../../../models';
import SendResult from '../SendResult';
import Konva from 'konva';
import BtnModal from './BtnModal';

interface IProps {
  data?: Url,
  tab?: string,
  type: string,
  typeEdit?: string,
  open?: boolean,
  color: string,
  slider: number,
  typeRect: string,
  isLoading: boolean,
  prevLines?: Lines[],
  urlUploaded?: string,
  isFullScreen: boolean,
  sizeImage: Size | undefined,
  closeModal: () => void,
  sendMask: ((maskFile: FormDataEntryValue | null) => void) | ((maskFile: FormDataEntryValue | null, typeEdit: string, data: ResponseImg) => void),
  setPrevLines: Dispatch<SetStateAction<Lines[]>>,
  setUrlUploaded?: Dispatch<SetStateAction<string | undefined>> | Dispatch<SetStateAction<string>>,
}

const DrawKonva = ({ tab, closeModal, typeEdit, isLoading, sendMask, prevLines, setPrevLines, sizeImage, open, data, color, slider, urlUploaded, isFullScreen, setUrlUploaded, type, typeRect }: IProps) => {

  const stageRef = useRef<Konva.Stage>(null);
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

  const width = contentImg.current?.clientWidth
  const height = contentImg.current && width && sizeImage ? (width / sizeImage?.width) * sizeImage?.height : 0

  return (
    <div className='w-full h-full relative flex flex-col justify-end' ref={contentImg}>
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
                  data={data}
                  image={image}
                  color={color}
                  slider={slider}
                  prevLines={prevLines}
                  setPrevLines={setPrevLines}
                  sizeImage={sizeImage}
                  width={width}
                  height={height}
                />
              )
            }
          </Stage>
        )
      }
      {/* {!typeEdit && !tab && (
        <SendResult
          width={width}
          height={height}
          stageRef={stageRef}
          isLoading={isLoading}
          sendMask={sendMask}
        />
      ) 
      : !tab ? (
        <BtnModal
          data={data}
          width={width}
          height={height}
          stageRef={stageRef}
          sendMask={sendMask}
          isLoading={isLoading}
          closeModal={closeModal}
        />
      ) : ''} */}
    </div>
  )
}

export default DrawKonva