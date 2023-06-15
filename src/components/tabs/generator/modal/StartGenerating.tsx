import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button, Modal, Box } from '@mui/material';
import style from '../../../../mui/style';
import i18next from 'i18next';
import amazingLoading from '../../../../assets/loading.gif'
import { request } from '../../../../services/api';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';

interface IProps {
  sendMask: () => void,
  isLoading: boolean,
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  localBlob: File | null | undefined
}

const StartGenerating = ({ isLoading, open, setOpen, localBlob, sendMask }: IProps) => {

  const { t } = i18next;
  const openModal = () => setOpen(true);
  const closeModal = (e: any) =>
    e.preventDefault();

  const checkStatus = (modal: string) => {
    const interval = setInterval(() => {
      request.statusGenerate()
        .then(res => {
          if (res.data.status !== 'generating') {
            setOpen(false)
            clearInterval(interval)
          } else
            setOpen(true)
        })
    }, 5000)
  }

  useEffect(() => {
    checkStatus(open ? 'first' : 'notFirst')
  }, [])

  return (
    <div>
      <LoadingButton
        loading={isLoading}
        sx={{ background: isLoading ? '#1F2937 !important' : '' }}
        onClick={() => {
          localBlob ?
            sendMask() :
            toast.warn(t('empty_img'), {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
        }}
        variant='contained'
        className='!mt-6'
        color='success'
        fullWidth
      >{t('generate')}</LoadingButton>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='!w-[60vw]' sx={style}>
          <p className='px-8 font-extrabold	text-2xl text-light-100'>{t('generating_progress')}</p>
          <div className='relative flex items-center justify-center my-10 mx-8'>
            {Array(7).fill({}).map((_, idx: number) =>
              <img className='bg-transparent w-[14%]' key={idx} src={amazingLoading} alt='loading' />
            )}
          </div>
          {/* <div className='w-full flex justify-center'>
            <Button
              onClick={closeModal}
              className='!bg-light-100 !text-dark-100'
              variant='contained'
            >{t('cancel')}</Button>
          </div> */}
        </Box>
      </Modal>
    </div>
  )
}

export default StartGenerating
