import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import { Modal, Box, Button } from '@mui/material';
import { Label, Input, Head } from '../../../../../mui/customize'
import { Result } from "../../../../models"
import style from '../../../../../mui/style';
import CloseIcon from '@mui/icons-material/Close';
import Download from '../../../../../assets/icons/Download';
import axios from 'axios';
import { t } from 'i18next';
import { Models, Size } from '../../../../../models';

interface IProps {
  open: boolean,
  data: Result,
  models: Models[],
  setOpen: Dispatch<SetStateAction<boolean>>
}

const DetailCard = ({ open, setOpen, data, models }: IProps) => {

  const contentImg = useRef<HTMLDivElement>(null);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [sizeImg, setSizeImg] = useState<Size>()
  const [selectedImg, setSelectedImg] = useState(data && data.result_images && data.result_images.length && data.result_images[0].id)

  const downloadImg = (url: string) => {
    axios.get(url, {
      responseType: 'blob'
    })
      .then(response => {
        const href = URL.createObjectURL(response.data);

        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.download = 'result.png';

        document.body.appendChild(anchorElement);
        anchorElement.click();

        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
      })
  }

  const findSrc = (list: Models[], id: number) => list.find(item => item.id === id)?.file

  const model = !!models.length &&
    models.find(item => item.id === data.defect_model_id) ?
    models.find(item => item.id === data.defect_model_id).name : ""

  useEffect(() => {
    const src = findSrc(data.result_images, selectedImg)
    const img: HTMLImageElement = new window.Image()
    img.onload = () => {
      let size: Size = {
        width: 0,
        height: 0
      };
      size.width = img.width
      size.height = img.height

      setSizeImg(size)
    }
    if (src)
      img.src = src
  }, [selectedImg])

  const width = contentImg.current?.clientWidth
  const height = contentImg.current && width && sizeImg ? (width / sizeImg?.width) * sizeImg?.height : 0

  return (
    <div className='w-full'>
      <Button
        className='!text-sm !border !border-solid !border-border !rounded-md !mt-auto'
        fullWidth
        onClick={openModal}
      >
        {t('view_result')}
      </Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='!w-[90%] h-[80vh] !max-h-[640px] !px-8' sx={style}>
          <div className='flex items-center justify-between'>
            <Head>{model}</Head>
            <CloseIcon
              className='!text-light-100 border border-light-100 rounded-full p-1 cursor-pointer'
              onClick={closeModal}
            />
          </div>
          <div className='flex flex-col sm:flex-row items-start justify-center mt-8 gap-8 h-fit'>
            <div className='flex flex-col justify-center w-full sm:w-1/2 h-full'>
              <Label className='!mb-1'>{t('model')}</Label>
              <Input
                size='small'
                value={model}
                disabled
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#D1D5DB",
                  },
                }}
                className='!bg-primary'
              />
              <ul
                className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                grid-rows-[min-content] mb-auto h-[55%] gap-2.5 rounded-md p-6 mt-8 border 
                border-light-400 overflow-auto'
              >
                {data.result_images.map((item, idx) =>
                  <li key={idx} className='w-full cursor-pointer max-h-20' onClick={() => setSelectedImg(item.id)}>
                    <img
                      src={item.file}
                      alt='result'
                      className={`rounded-md transition object-cover h-full w-full border-[3px] border-transparent 
                        ${selectedImg === item.id && '!border-light-100'}`
                      }
                    />
                  </li>
                )}
              </ul>
              <Button
                fullWidth
                className='!mt-6'
                color='success'
                variant='contained'
                onClick={() => {
                  data.result_images.length && data.result_images.map(item =>
                    downloadImg(item.file)
                  )
                }}
              >{t('download_all')}</Button>
            </div>
            <div className='flex flex-col h-fit justify-start w-full sm:w-1/2'>
              <Label className='!mb-1'>{t('defect_type')}</Label>
              <Input
                size='small'
                value={data.defect_type.name}
                disabled
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#D1D5DB",
                  },
                }}
                className='!bg-primary'
              />
              <div
                className='relative h-fit mt-8 rounded-md overflow-hidden'
                ref={contentImg}
              >
                <img
                  alt='result'
                  className={`w-full h-[${height}px] object-cover`}
                  src={data.result_images.length && data.result_images.find(item => item.id === selectedImg).file}
                />
                <div
                  onClick={() =>
                    downloadImg(data.result_images.length && data.result_images.find(item => item.id === selectedImg).file)
                  }
                >
                  <Download />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailCard