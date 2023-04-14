import { useState } from 'react';
import { Button, Divider } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import remove from '../../../assets/icons/delete.svg';

interface Url {
  id: number,
  url: string
}

const UploadImage = () => {

  const [urlUploaded, setUrlUploaded] = useState<Url[]>([])
  const readDataURL = (event: any) => {
    let reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setUrlUploaded([...urlUploaded, { id: urlUploaded.length + 1, url: reader.result }])
      }
    }
    reader.readAsDataURL(event.currentTarget.files[0]);
  }

  return (
    <div className='w-1/2'>
      <p className='text-sm	font-medium mb-1'>Defect Sample</p>
      <div className="relative w-full h-[188px] bg-dark-200 border border-dashed border-light-400 rounded-md flex justify-center items-center flex-col py-6">
        <input onChange={readDataURL} type="file" className='absolute w-full h-full opacity-0 cursor-pointer' />
        <img src={gallery} alt='gallery' />
        <p className='text-primary font-normal text-xs mt-4 mb-6'>Drag & drop your files here or</p>
        <Button className='!rounded-md !border-light-400' variant='outlined' color='secondary'>Browse</Button>
      </div>
      <Divider className='!my-8' color='#6B7280' />
      <ul className='grid grid-cols-4 gap-3'>
        {urlUploaded.reverse().map((item: Url) =>
          <li key={item.id} className='relative'>
            <img src={item.url} className='h-[120px] object-cover rounded-md' />
            <Button
              className='!min-w-0 !rounded-lg !w-9 !h-9 !absolute right-3 top-3 !bg-[rgba(0,0,0,0.4)]
              shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
              variant='text'
            >
              <img src={remove} alt='delete' />
            </Button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default UploadImage