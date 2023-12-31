import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import i18next from 'i18next';
import ListIcon from '../../editImage/tools/view/ListIcon';
import DrawKonva from '../../editImage/tools/DrawKonva';
import { Lines, Size } from '../../../models';
import MoreIcon from '../../editImage/tools/view/MoreIcon';
import { request } from '../../../services/api';

interface IProps {
  defect: number | null | undefined,
  isLoading: boolean,
  prevLines: Lines[],
  urlUploaded: string | undefined,
  localBlob: File | null | undefined,
  setUrlUploaded: Dispatch<SetStateAction<string | undefined>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setPrevLines: Dispatch<SetStateAction<Lines[]>>,
  setLocalBlob: Dispatch<SetStateAction<File | null | undefined>>
}

const UploadImage = ({
  defect, prevLines, setPrevLines, urlUploaded, setUrlUploaded, isLoading, setIsLoading, localBlob, setLocalBlob
}: IProps) => {

  const { t } = i18next;
  const [color, setColor] = useState('FF0000')
  const [type, setType] = useState<string>('MouseDraw')
  const [typeRect, setTypeRect] = useState<string>('MouseDraw')
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [slider, setSlider] = useState<number>(12)
  const [sizeImage, setSizeImage] = useState<Size>()

  const changeSlider = (event: Event, newValue: number | number[]) =>
    typeof newValue === 'number' && setSlider(newValue);

  const readDataURL = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    setLocalBlob(event.target.files[0])

    reader.onload = () => typeof reader.result === 'string' && setUrlUploaded(reader.result)

    event.currentTarget && event.currentTarget.files && reader.readAsDataURL(event.currentTarget.files[0]);
  }

  const sendMask = (maskFile: FormDataEntryValue | null) => {
    setIsLoading(true)

    const formData: FormData | null = new FormData()
    if (localBlob) {
      formData.append('file', localBlob)
    }
    if (formData.get('file') && maskFile && defect)
      request.uploadImage(formData.get('file'), maskFile, defect)
        .then(() => {
          setLocalBlob(null)
          setIsLoading(false)
        })
    else
      setIsLoading(false)
  }

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.onload = () => {
      let size: Size = {
        width: 0,
        height: 0
      };
      size.width = img.width
      size.height = img.height
      setSizeImage(size)
    }
    if (urlUploaded) img.src = urlUploaded
  }, [urlUploaded])

  return (
    <div className='w-full md:w-1/2'>
      <p className='text-sm	font-medium mb-1'>{t('your_image')}</p>
      {urlUploaded ?
        <div className='w-full rounded-md overflow-hidden relative'>
          <DrawKonva
            type={type}
            color={color}
            slider={slider}
            typeRect={typeRect}
            prevLines={prevLines}
            setPrevLines={setPrevLines}
            sizeImage={sizeImage}
            urlUploaded={urlUploaded}
            sendMask={sendMask}
            isLoading={isLoading}
            isFullScreen={isFullScreen}
            setUrlUploaded={setUrlUploaded}
            tab='generate'
          />
          <ListIcon
            type={type}
            color={color}
            slider={slider}
            setType={setType}
            typeRect={typeRect}
            setColor={setColor}
            setTypeRect={setTypeRect}
            changeSlider={changeSlider}
          />
          <MoreIcon
            prevLines={prevLines}
            urlUploaded={urlUploaded}
            isFullScreen={isFullScreen}
            setPrevLines={setPrevLines}
            setUrlUploaded={setUrlUploaded}
            setIsFullScreen={setIsFullScreen}
          />
        </div> :
        <div
          className="relative w-full bg-light-100 border border-dashed h-64 lg:h-96
        border-light-400 rounded-md flex justify-center items-center flex-col py-6"
        >
          <input onChange={readDataURL} type="file" className='absolute w-full h-full opacity-0 cursor-pointer z-10' />
          <img src={gallery} alt='gallery' />
          <p className='text-primary font-normal text-xs mt-4 mb-6'>{t('drag_drop_text')}</p>
          <Button className='!rounded-md !border-light-400' variant='outlined' color='primary'>{t('browse')}</Button>
        </div>
      }
    </div>
  )
}

export default UploadImage