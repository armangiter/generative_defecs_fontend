import { useState } from 'react';
import { Button } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import IconEditor from './edit/IconEditor';
import ImageEdit from './edit/ImageEdit';

const UploadImage = () => {

  const [type, setType] = useState<string>('MouseSquare')
  const [typeRect, setTypeRect] = useState<string>('MouseSquare')
  const [urlUploaded, setUrlUploaded] = useState<string>('');

  const readDataURL = (event: any) => {
    let reader = new FileReader();

    reader.onload = () => typeof reader.result === 'string' && setUrlUploaded(reader.result)

    reader.readAsDataURL(event.currentTarget.files[0]);
  }

  return (
    <div className='w-full md:w-1/2'>
      <p className='text-sm	font-medium mb-1'>Your Image</p>
      {urlUploaded ?
        <div className='w-full h-96 relative rounded-md overflow-hidden'>
          <ImageEdit type={type} typeRect={typeRect} urlUploaded={urlUploaded} setUrlUploaded={setUrlUploaded} />
          <IconEditor type={type} setType={setType} typeRect={typeRect} setTypeRect={setTypeRect} />
        </div> :
        <div
          className="relative w-full bg-dark-200 border border-dashed h-64 lg:h-96
        border-light-400 rounded-md flex justify-center items-center flex-col py-6"
        >
          <input onChange={readDataURL} type="file" className='absolute w-full h-full opacity-0 cursor-pointer z-10' />
          <img src={gallery} alt='gallery' />
          <p className='text-primary font-normal text-xs mt-4 mb-6'>Drag & drop your files here or</p>
          <Button className='!rounded-md !border-light-400' variant='outlined' color='secondary'>Browse</Button>
        </div>
      }
    </div>
  )
}

export default UploadImage