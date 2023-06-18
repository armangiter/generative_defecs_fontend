import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Modal, Box } from '@mui/material';
import style from '../../../../mui/style';
import i18next from 'i18next';
import { request } from '../../../../services/api';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';
import { BorderLinearProgress } from '../../../../mui/customize';

interface IProps {
  defect: number | undefined | null,
  progress: number,
  sendMask: () => void,
  isLoading: boolean,
  open: boolean,
  setProgress: Dispatch<SetStateAction<number>>,
  setOpen: Dispatch<SetStateAction<boolean>>,
  localBlob: File | null | undefined
}

const StartGenerating = ({ defect, progress, setProgress, isLoading, open, setOpen, localBlob, sendMask }: IProps) => {

  const { t } = i18next;
  const closeModal = (e: any) =>
    e.preventDefault();

  const checkStatus = (modal: string) => {
    let prevProgress = progress
    let ifShowToast = false

    const interval = setInterval(() => {
      request.statusGenerate()
        .then(res => {
          if (res.data.status === 'generating') {
            setOpen(true)
            ifShowToast = true
            if (prevProgress < 90) {
              setProgress(prev => prev + 10)
              prevProgress += 10
            }
          } else {
            clearInterval(interval)
            if (ifShowToast) {
              setProgress(100);
              toast.success(t('over_generate_progress'), {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
            };
            setTimeout(() => {
              setOpen(false)
              setProgress(0);
            }, 1000);
          }
        })
    }, 5000)
  }

  useEffect(() => {
    checkStatus(open ? 'first' : 'notFirst')
  }, [])
  const defectToBoolean = defect ? false : true

  return (
    <div>
      <LoadingButton
        loading={isLoading}
        sx={{ background: isLoading || defectToBoolean ? '#1F2937 !important' : '' }}
        disabled={defectToBoolean}
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
        <Box className='!w-[90vw]' sx={style}>
          <p className='px-8 font-extrabold	text-2xl text-light-100'>{t('generating_progress')}</p>
          <div className='relative'>
            {/* {Array(7).fill({}).map((_, idx: number) =>
              <img className='bg-transparent w-[14%]' key={idx} src={amazingLoading} alt='loading' />
            )} */}
            <BorderLinearProgress
              className='!my-12'
              variant="determinate"
              value={progress}
            />
            <p
              className={`absolute font-semibold text-xs left-1/2 top-1/2 translate-x-[-50%] translate-y-[-44%]
              ${progress < 50 ? 'text-light-800' : 'text-dark-200'}`}
            >{progress}%</p>

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
