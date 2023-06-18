import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button, Modal, Box } from '@mui/material';
import style from '../../../../mui/style';
import i18next from 'i18next';
import amazingLoading from '../../../../assets/loading.gif'
import { request } from '../../../../services/api';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';

interface IProps {
  openModal: boolean,
  isLoadingB: boolean,
  getListImage: (from: string) => void,
  setOpenModal: Dispatch<SetStateAction<boolean>>,
}

const StartTuning = ({ isLoadingB, openModal, setOpenModal, getListImage }: IProps) => {

  const { t } = i18next;
  const closeModal = (e: any) =>
    e.preventDefault();

  const checkStatus = (modal: string) => {
    const interval = setInterval(() => {
      request.statusFine()
        .then(res => {
          if (res.data.status !== 'training') {
            modal === 'first' && setOpenModal(false)
            clearInterval(interval)
          } else
            setOpenModal(true);
        })
    }, 5000)
  }

  useEffect(() => {
    checkStatus(openModal ? 'first' : 'notFirst')
  }, [])

  return (
    <div>
      <LoadingButton
        loading={isLoadingB}
        sx={{ background: isLoadingB ? '#1F2937 !important' : '' }}
        variant="contained"
        color="success"
        className='!mt-6 !w-[99.8%] !mx-auto'
        onClick={() => getListImage('fineTune')}
      >{t('fine_tune')}</LoadingButton>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box className='!w-[60vw]' sx={style}>
          <p className='px-8 font-extrabold	text-2xl text-light-100'>{t('fine_tuning_progress')}</p>
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

export default StartTuning