import { useEffect, useState } from 'react'
import { Button, Modal, Box } from '@mui/material';
import style from '../../../../mui/style';
import i18next from 'i18next';
import amazingLoading from '../../../../assets/loading.gif'
import { request } from '../../../../services/api';
import { toast } from 'react-toastify';

interface IProps {
  getListImage: () => void
}

const StartTuning = ({ getListImage }: IProps) => {

  const { t } = i18next;
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = (e: any) =>
    e.preventDefault();

  const checkStatus = (type: string) => {
    type === 'click' && openModal()
    const interval = setInterval(() => {
      request.statusFine()
        .then(res => {
          if (res.data.status !== 'training') {
            setOpen(false)
            clearInterval(interval)
            if (type === 'click') {
              toast.success(t('over_fine_progress'), {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
              getListImage()
            }
          } else
            openModal();
        })
    }, 5000)
  }

  useEffect(() => {
    checkStatus('useEffect')
  }, [])

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        className='!mt-6 !w-[99.8%] !mx-auto'
        onClick={() => checkStatus('click')}
      >{t('fine_tune')}</Button>
      <Modal
        open={open}
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