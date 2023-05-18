import { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import { Label, Input } from '../../../../mui/customize';
import { Result } from "../../../../models"
import style from '../../../../mui/style';
import CloseIcon from '@mui/icons-material/Close';
import download from '../../../../assets/icons/download.svg';
import i18next from 'i18next';
import axios from 'axios';

interface IProps {
  open: boolean,
  data: Result,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const DetailCard = ({ open, setOpen, data }: IProps) => {

  const { t } = i18next;
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [selectedImg, setSelectedImg] = useState(data && data.result_images && data.result_images.length && data.result_images[0].file)

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

  return (
    <div className='w-1/4'>
      {data.result_images.length > 4 &&
        <li
          className="w-full h-10 p-1.5 bg-dark-100 rounded flex justify-center items-center cursor-pointer"
          onClick={openModal}
        >
          <Label className="text-light-100">+{data.result_images.length - 3}</Label>
        </li>
      }
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='!w-[90%] h-[80vh] !max-h-[640px] !px-8' sx={style}>
          <div className='flex items-center justify-between'>
            <p className='font-extrabold text-2xl text-light-100'>{data.created.split('T')[0]}</p>
            <CloseIcon
              className='!text-light-100 border border-light-100 rounded-full p-1 cursor-pointer'
              onClick={closeModal}
            />
          </div>
          <div className='flex flex-col sm:flex-row items-start justify-center mt-8 gap-8 h-fit sm:h-[89%]'>
            <div className='flex flex-col justify-center w-full sm:w-1/2 h-full'>
              <Label className='!mb-1'>{t('defect_type')}</Label>
              <Input
                size='small'
                value={data.defect_type_name}
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
                  <li key={idx} className='w-full cursor-pointer max-h-20' onClick={() => setSelectedImg(item.file)}>
                    <img
                      src={item.file}
                      alt='result'
                      className={`rounded-md transition object-cover h-full w-full border-[3px] border-transparent 
                        ${selectedImg === item.file && '!border-light-100'}`
                      }
                    />
                  </li>
                )}
              </ul>
              <Button fullWidth className='!mt-6' color='success' variant='contained'>{t('download_all')}</Button>
            </div>
            <div className='flex flex-col h-full justify-start w-full sm:w-1/2'>
              <Label className='!mb-1'>{t('model')}</Label>
              <Input
                size='small'
                value='Scratch-1'
                disabled
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#D1D5DB",
                  },
                }}
                className='!bg-primary'
              />
              <div className='relative h-full mt-8 rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover' src={selectedImg} alt='result' />
                <img
                  className='absolute top-6 right-6 bg-light-100 p-2 shadow-[0px_4px_4px_rgba(0,0,0,0.08)] rounded-lg cursor-pointer'
                  onClick={() => downloadImg(selectedImg)}
                  src={download}
                  alt='download'
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailCard