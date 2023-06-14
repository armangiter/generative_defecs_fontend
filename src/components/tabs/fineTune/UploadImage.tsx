import { Dispatch, SetStateAction, useState } from 'react';
import { Button, Divider } from '@mui/material';
import gallery from '../../../assets/images/gallery.png';
import { request } from '../../../services/api';
import { t } from 'i18next';
import { readDataURL, urlToFile, urlToLocal } from '../../../helper';
import { Lines, ResponseImg, Url } from '../../../models';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import EditImage from '../../editImage';
import MoreIcon from '../../editImage/tools/view/MoreIcon';
import ListResult from './ListResult';

interface IProps {
  defect: number | undefined,
  urlUploaded: Url[],
  setUrlUploaded: Dispatch<SetStateAction<Url[]>>,
  getListImage: (from: string) => void
}

const UploadImage = ({ setUrlUploaded, urlUploaded, getListImage, defect }: IProps) => {

  const [idLoading, setIdLoading] = useState<number>();
  const [localUrl, setLocalUrl] = useState<string | null>()
  const [localBlob, setLocalBlob] = useState<File | null>()
  const [prevLines, setPrevLines] = useState<Lines[]>([]);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sendMask = async (maskFile: FormDataEntryValue | null, typeEdit?: string, data?: ResponseImg) => {
    setIsLoading(true)

    const formData: FormData | null = new FormData()
    if (localBlob) {
      formData.append('file', localBlob)
    }
    const emptyUrl: Url = {
      id: v4(),
      file: '',
      blob: ''
    }

    if (formData.get('file') && maskFile && defect)
      request.uploadImage(formData.get('file'), maskFile, defect)
        .then(() => {
          setUrlUploaded([emptyUrl, ...urlUploaded])
          setLocalBlob(null)
          setLocalUrl(null)
          request.listImage()
            .then(response => {
              let notInclude: Url | null = null
              response.data.map(async (item: Url) => {
                if (!urlUploaded.find((url: Url) => url.id === item.id)) {
                  notInclude = item
                  if (notInclude) {
                    const blob = await urlToLocal(item.file)
                    notInclude.blob = blob
                    notInclude.isLoaded = true
                    setIsLoading(false)
                    setUrlUploaded([notInclude, ...urlUploaded]);
                  }
                }
              })
            })
            .catch(() => setIsLoading(false))
        })
        .catch(() => setIsLoading(false));
    else if (typeEdit === 'fromModal' && data) {
      const blob = await urlToFile(data.file)
      await request.uploadImage(blob, maskFile, data?.defect_type)
        .then(() => {
          setLocalBlob(null)
          setLocalUrl(null)
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    } else
      setIsLoading(false);
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
      {localUrl ?
        <div className='w-full rounded-md overflow-hidden relative'>
          <EditImage
            isLoading={isLoading}
            sendMask={sendMask}
            prevLines={prevLines}
            imgUploaded={localUrl}
            setPrevLines={setPrevLines}
          />
          <MoreIcon
            prevLines={prevLines}
            urlUploaded={localUrl}
            isFullScreen={isFullScreen}
            setPrevLines={setPrevLines}
            setUrlUploaded={setLocalUrl}
            setIsFullScreen={setIsFullScreen}
          />
        </div>
        :
        <div className="relative w-full h-[188px] bg-dark-200 border border-dashed border-light-400 rounded-md flex justify-center items-center flex-col py-6">
          <input
            onChange={(event) =>
              readDataURL(event)
                .then(blobUrl => {
                  setPrevLines([])
                  setLocalUrl(blobUrl)
                  event.target.files && setLocalBlob(event.target.files[0])
                })
                .catch(() => {
                  toast.error(t('failed_to_load_img'), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
                })
            }
            type="file"
            className='absolute w-full h-full opacity-0 cursor-pointer z-10'
          />
          <img src={gallery} alt='gallery' />
          <p className='text-primary font-normal text-xs mt-4 mb-6'>{t('drag_drop_text')}</p>
          <Button className='!rounded-md !border-light-400' variant='outlined' color='secondary'>{t('browse')}</Button>
        </div>
      }
      <Divider className='!my-8' color='#6B7280' />
      <ul className='grid grid-cols-4 gap-3'>
        <ListResult
          urlUploaded={urlUploaded}
          sendMask={sendMask}
          idLoading={idLoading}
          removeImage={removeImage}
          isLoading={isLoading}
        />
      </ul>
    </div>
  )
}

export default UploadImage