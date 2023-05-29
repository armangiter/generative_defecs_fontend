import { Dispatch, SetStateAction, useState, ChangeEvent } from 'react';
import { Button, Divider, Skeleton, CircularProgress } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import remove from '../../../assets/icons/delete.svg';
import { request } from '../../../services/api';
import i18next from 'i18next';
import { updateUrl, urlToBlob } from '../../../helper';
import { Url } from '../../../models';
import { v4 } from 'uuid';
import OpenEdit from './modal/OpenEdit';

interface IProps {
  defect: number | undefined,
  urlUploaded: Url[],
  setUrlUploaded: Dispatch<SetStateAction<Url[]>>,
  getListImage: () => void
}

const UploadImage = ({ setUrlUploaded, urlUploaded, getListImage, defect }: IProps) => {

  const { t } = i18next;
  const [idLoading, setIdLoading] = useState<number>();

  const readDataURL = (event: ChangeEvent<HTMLInputElement>) => {
    const formData: FormData | null = new FormData()
    formData.append('file', event.target.files[0])
    const emptyUrl: Url = {
      id: v4(),
      file: '',
      blob: ''
    }
    if (event.target.files && formData.get('file') && defect) {
      request.uploadImage(formData.get('file'), defect)
        .then(() => {
          setUrlUploaded([emptyUrl, ...urlUploaded])
          request.listImage()
            .then(response => {
              let notInclude: Url | null = null
              response.data.map(async (item: Url) => {
                if (!urlUploaded.find((url: Url) => url.id === item.id)) {
                  notInclude = item
                  if (notInclude) {
                    const blob = await urlToBlob(item.file)
                    notInclude.blob = blob
                    notInclude.isLoaded = true
                    setUrlUploaded([notInclude, ...urlUploaded]);
                  }
                }
              })
            })
        })
    }
  }

  const removeImage = (id: number) => {
    if (typeof id === 'number') {
      setIdLoading(id)
      request.deleteImage(id)
        .then(() => {
          setIdLoading(id)
          getListImage()
        })
    }
  }

  return (
    <div className='w-full md:w-1/2'>
      <p className='text-sm	font-medium mb-1'>{t('defect_sample')}</p>
      <div className="relative w-full h-[188px] bg-dark-200 border border-dashed border-light-400 rounded-md flex justify-center items-center flex-col py-6">
        <input
          onChange={readDataURL}
          type="file"
          className='absolute w-full h-full opacity-0 cursor-pointer z-10'
        />
        <img src={gallery} alt='gallery' />
        <p className='text-primary font-normal text-xs mt-4 mb-6'>{t('drag_drop_text')}</p>
        <Button className='!rounded-md !border-light-400' variant='outlined' color='secondary'>{t('browse')}</Button>
      </div>
      <Divider className='!my-8' color='#6B7280' />
      <ul className='grid grid-cols-4 gap-3'>

        {!!urlUploaded.length && urlUploaded.map((item: Url) => (
          <li key={item.id} className='relative rounded-md overflow-hidden h-[120px]'>
            {
              item.isLoaded ? (
                <img
                  src={updateUrl(item.file)}
                  className='h-full object-cover'
                />
              ) : (
                <Skeleton variant="rectangular" style={{ width: '100%', height: '100%' }} />
              )
            }
            <div className="flex flex-wrap items-center justify-end gap-2 !absolute right-3 top-3">
              <OpenEdit data={item} />
              <Button
                className='!min-w-0 !rounded-lg !w-9 !h-9 !bg-[rgba(0,0,0,0.4)]
              shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
                variant='text'
                color='error'
                onClick={() => typeof item.id === 'number' && removeImage(item.id)}
              >
                {
                  idLoading === item.id ?
                    <CircularProgress className='!w-full !h-full' /> :
                    <img src={remove} alt='delete' />
                }
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UploadImage