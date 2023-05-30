import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import i18next from 'i18next';
import ListIcon from '../../editImage/tools/view/ListIcon';
import DeleteImg from '../../editImage/tools/typeEdit/DeleteImg';
import DrawKonva from '../../editImage/tools/DrawKonva';
import { Lines, Size } from '../../../models';
import FullScreen from './modal/FullScreen';

const UploadImage = () => {

  const { t } = i18next;
  const [color, setColor] = useState('FF0000')
  const [type, setType] = useState<string>('MouseDraw')
  const [typeRect, setTypeRect] = useState<string>('MouseDraw')
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [slider, setSlider] = useState<number>(12)
  const [sizeImage, setSizeImage] = useState<Size>()
  const [prevLines, setPrevLines] = useState<Lines[]>([]);
  const [urlUploaded, setUrlUploaded] = useState<string>();

  const changeSlider = (event: Event, newValue: number | number[]) =>
    typeof newValue === 'number' && setSlider(newValue);

  const readDataURL = (event: any) => {
    let reader = new FileReader();

    reader.onload = () => typeof reader.result === 'string' && setUrlUploaded(reader.result)

    reader.readAsDataURL(event.currentTarget.files[0]);
  }

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.onload = () => {
      let size: Size = {
        width: 300,
        height: 168
      };
      size.width = img.width
      size.height = img.height
      setSizeImage(size)
    }
    img.src = urlUploaded
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
            isFullScreen={isFullScreen}
            setUrlUploaded={setUrlUploaded}
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
          <div
            className='absolute right-6 top-6 bg-light-100 py-[12px] px-[13px] flex items-center 
          justify-center gap-3 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
          >
            <DeleteImg setUrlUploaded={setUrlUploaded} />
            <FullScreen
              urlUploaded={urlUploaded}
              prevLines={prevLines}
              setPrevLines={setPrevLines}
              isFullScreen={isFullScreen}
              setIsFullScreen={setIsFullScreen}
            />
          </div>
        </div> :
        <div
          className="relative w-full bg-dark-200 border border-dashed h-64 lg:h-96
        border-light-400 rounded-md flex justify-center items-center flex-col py-6"
        >
          <input onChange={readDataURL} type="file" className='absolute w-full h-full opacity-0 cursor-pointer z-10' />
          <img src={gallery} alt='gallery' />
          <p className='text-primary font-normal text-xs mt-4 mb-6'>{t('drag_drop_text')}</p>
          <Button className='!rounded-md !border-light-400' variant='outlined' color='secondary'>{t('browse')}</Button>
        </div>
      }
    </div>
  )
}

export default UploadImage