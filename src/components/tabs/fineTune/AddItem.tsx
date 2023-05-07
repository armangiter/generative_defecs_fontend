import { Dispatch, SetStateAction, ChangeEvent, useState } from 'react'
import { request } from '../../../services/api';
import { DefectType } from '../../../models';

// MUI
import { TextField, Button, CircularProgress } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

interface IProps {
  isLoading: boolean,
  setIsInput: Dispatch<SetStateAction<boolean>>,
  getListDefect: () => void,
}

const AddItem = ({ isLoading, setIsInput, getListDefect }: IProps) => {

  const [defectName, setDefectName] = useState('')
  const addItem = () => {
    request.createDefect(defectName)
      .then(response => {
        setDefectName('')
        getListDefect()
      })
  }

  return (
    <div className='flex items-center justify-center px-3 mb-1.5'>
      <TextField
        placeholder='Add New Defect'
        value={defectName}
        onKeyDown={(e) => e.stopPropagation()}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setDefectName(event.target.value)}
        className='!bg-primary !rounded !w-full'
        sx={{
          '.MuiInputBase-root': { border: '1px solid #6B7280' },
          '.MuiInputBase-input': { fontSize: 14, fontWeight: 400, color: '#6B7280' }
        }}
        variant="outlined"
        size='small'
      />
      <Button className='!w-4 !h-4 !ml-3 !mr-2' variant='text'>
        <CloseIcon className='text-red-100' onClick={() => { setDefectName(''); setIsInput(false) }} />
      </Button>
      {
        isLoading ? (
          <CircularProgress className='!h-7 !w-7' />
        ) : (
          <Button className='!w-4 !h-4' variant='text'>
            <DoneIcon className='text-green-100' onClick={() => defectName && addItem()} />
          </Button>
        )
      }
    </div>
  )
}

export default AddItem