import { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import style from '../../../../mui/style';
import { Label } from '../../../../mui/customize';

const SaveDefect = () => {

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='!px-8 !w-[560px]' sx={style}>
        <p className='text-2xl font-extrabold text-light-100'>Save Defect Model</p>
        <div className='flex flex-col justify-start mt-12'>
          <Label className='!mb-1'>Defect Type</Label>
          <TextField
            placeholder='Scratch'
            size='small'
            sx={{
              background: '#1F2937', opacity: 0.7, fontWeight: 400, fontSize: 15, color: '#D1D5DB',
              '.MuiInputBase-input': { color: '#D1D5DB' }
            }}
          />
          <Label className='mt-6 !mb-1'>Defect Type</Label>
          <TextField
            placeholder='Scratch-1'
            size='small'
            sx={{
              background: '#1F2937', opacity: 0.7, fontWeight: 400, fontSize: 15, color: '#FFFFFF',
              '.MuiInputBase-input': { color: '#FFFFFF' }
            }}
          />
        </div>
        <div className='flex justify-end items-center gap-4 mt-12'>
          <Button
            className='!border-light-400'
            color='secondary'
            variant='outlined'
            onClick={closeModal}
          >Discard</Button>
          <Button
            color='secondary'
            variant='contained'
            onClick={closeModal}
          >Save</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default SaveDefect