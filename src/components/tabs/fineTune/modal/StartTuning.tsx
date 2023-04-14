import { useState } from 'react'
import { Button, Modal, Box, LinearProgress } from '@mui/material';
import { BorderLinearProgress } from '../../../../mui/customize';
import style from '../../../../mui/style';

const StartTuning = () => {

  const [progress, setProgress] = useState<number>(52)
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        className='!mt-6 !w-[99.8%] !mx-auto'
        onClick={openModal}
      >Fine Tune</Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='!w-[90%]' sx={style}>
          <p className='px-8 font-extrabold	text-2xl text-light-100'>Fine Tuning In Progress...</p>
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
            >Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default StartTuning