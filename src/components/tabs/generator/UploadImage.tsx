import { useState } from 'react';
import { Button } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import ListIcon from './edit/view/ListIcon';
import Konva from './edit/Konva';
import { ReactComponent as FullScreen } from '../../../assets/icons/fullScreen.svg'
import { ReactComponent as SmallScreen } from '../../../assets/icons/smallScreen.svg'
import i18next from 'i18next';

const UploadImage = () => {

  const { t } = i18next;
  const [type, setType] = useState<string>('MouseSquare')
  const [typeRect, setTypeRect] = useState<string>('MouseSquare')
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [urlUploaded, setUrlUploaded] = useState<string>('');


  const readDataURL = (event: any) => {
    let reader = new FileReader();

    reader.onload = () => typeof reader.result === 'string' && setUrlUploaded(reader.result)

    reader.readAsDataURL(event.currentTarget.files[0]);
  }


  return (
    <div className='w-full md:w-1/2'>
      <p className='text-sm	font-medium mb-1'>{t('your_image')}</p>
      {urlUploaded ?
        <div
          className={`w-full rounded-md overflow-hidden 
          ${isFullScreen ? 'h-full absolute left-0 top-0 z-20 rounded-r-2xl rounded-bl-2xl' :
              'relative h-96'}`}
        >
          <Konva
            type={type}
            typeRect={typeRect}
            urlUploaded={urlUploaded}
            isFullScreen={isFullScreen}
            setUrlUploaded={setUrlUploaded}
          />
          <ListIcon type={type} setType={setType} typeRect={typeRect} setTypeRect={setTypeRect} />
          <div
            className='absolute right-6 top-6 bg-light-100 py-[12px] px-[13px] flex items-center 
          justify-center rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
            onClick={() => setIsFullScreen(!isFullScreen)}
          >
            {isFullScreen ?
              <SmallScreen className='cursor-pointer flex items-center' /> :
              <FullScreen className='cursor-pointer flex items-center' />}
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