import { useState } from 'react'
import { Button, Modal, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { BorderLinearProgress } from '../../../../mui/customize';
import style from '../../../../mui/style';
import { request } from '../../../../services/api';
import i18next from 'i18next';

const StartTuning = () => {

  const { t } = i18next;
  const [progress, setProgress] = useState<number>(52)
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false)

  const createTune = () => {
    setIsLoading(true)
    request.createFineTune()
      .then(res => {
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }

  return (
    <div>
      <LoadingButton
        variant="contained"
        color="success"
        className='!mt-6 !w-[99.8%] !mx-auto'
        loading={isLoading}
        onClick={createTune}
      >{t('fine_tune')}</LoadingButton>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='!w-[90%]' sx={style}>
          <p className='px-8 font-extrabold	text-2xl text-light-100'>{t('fine_tuning_progress')}</p>
          <div className='relative'>
            <BorderLinearProgress
              className='!my-12'
              variant="determinate"
              value={progress}
            />
            <p
              className='absolute font-semibold text-xs text-dark-200 left-1/2
               top-1/2 translate-x-[-50%] translate-y-[-44%]'
            >{progress}%</p>
          </div>
          <div className='w-full flex justify-center'>
            <Button
              onClick={closeModal}
              className='!bg-light-100 !text-dark-100'
              variant='contained'
            >{t('cancel')}</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default StartTuning