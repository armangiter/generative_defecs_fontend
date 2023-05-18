import { useEffect, useState, ChangeEvent } from 'react';
import { Button, Divider, CircularProgress } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import remove from '../../../assets/icons/delete.svg';
import { request } from '../../../services/api';
import i18next from 'i18next';
import { updateUrl } from '../../../helper';

interface Url {
  id: number,
  file: string,
}

interface IProps {
  defect: number
}

const UploadImage = ({ defect }: IProps) => {

  const { t } = i18next;
  const [urlUploaded, setUrlUploaded] = useState<Url[]>([])
  const [idLoading, setIdLoading] = useState<number>();

  const getListImage = () => {
    request.listImage()
      .then(response => setUrlUploaded(response.data.reverse()))
  }
  const readDataURL = (event: ChangeEvent<HTMLInputElement>) => {
    const formData: FormData | null = new FormData()
    formData.append('file', event.target.files[0])
    if (event.target.files && formData.get('file')) {
      request.uploadImage(formData.get('file'), defect)
        .then(() => getListImage())
    }
  }
  const removeImage = (id: number) => {
    setIdLoading(id)
    request.deleteImage(id)
      .then(() => {
        setIdLoading(id)
        getListImage()
      })
  }


  useEffect(() => {
    getListImage()
  }, [])


  return (
    <div className='w-full md:w-1/2'>
      <p className='text-sm	font-medium mb-1'>{t('defect_sample')}</p>
      <div className="relative w-full h-[188px] bg-dark-200 border border-dashed border-light-400 rounded-md flex justify-center items-center flex-col py-6">
        <input onChange={readDataURL} type="file" className='absolute w-full h-full opacity-0 cursor-pointer z-10' />
        <img src={gallery} alt='gallery' />
        <p className='text-primary font-normal text-xs mt-4 mb-6'>{t('drag_drop_text')}</p>
        <Button className='!rounded-md !border-light-400' variant='outlined' color='secondary'>{t('browse')}</Button>
      </div>
      <Divider className='!my-8' color='#6B7280' />
      <ul className='grid grid-cols-4 gap-3'>
        {urlUploaded.length && urlUploaded.map((item: Url) =>
          <li key={item.id} className='relative'>
            <img src={updateUrl(item.file)} className='h-[120px] object-cover rounded-md' />
            <Button
              className='!min-w-0 !rounded-lg !w-9 !h-9 !absolute right-3 top-3 !bg-[rgba(0,0,0,0.4)]
              shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
              variant='text'
              color='error'
              onClick={() => removeImage(item.id)}
            >
              {
                idLoading === item.id ?
                  <CircularProgress className='!w-full !h-full' /> :
                  <img src={remove} alt='delete' />
              }
            </Button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default UploadImage