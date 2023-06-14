import { Dispatch, SetStateAction, ChangeEvent, useState } from 'react'
import { request } from '../../../services/api';

// MUI
import { TextField, Button, CircularProgress } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

interface IProps {
  isLoading: boolean,
  setIsInput: Dispatch<SetStateAction<boolean>>,
  getListDefect: () => void,
}

interface Detail {
  defectName: string,
  commandName: string
}

const AddItem = ({ isLoading, setIsInput, getListDefect }: IProps) => {

  const [isLoadingAdd, setIsLoadingAdd] = useState<boolean>(false)
  const [detailAdd, setDetailAdd] = useState<Detail>({
    defectName: '',
    commandName: ''
  })
  const addItem = () => {
    setIsLoadingAdd(true)
    request.createDefect(detailAdd.defectName, detailAdd.commandName)
      .then((res) => {
        setIsLoadingAdd(false)
        getListDefect()
      })
  }

  return (
    <div className='flex items-center justify-center px-3 mb-1.5'>
      <div className='flex items-center justify-center !w-full'>
        <TextField
          placeholder='Add New Defect'
          value={detailAdd.defectName}
          onKeyDown={(e) => e.stopPropagation()}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDetailAdd({
              ...detailAdd,
              defectName: event.target.value
            })
          }
          className='!bg-primary !rounded !w-1/2'
          sx={{
            '.MuiInputBase-root': { border: '1px solid #6B7280' },
            '.MuiInputBase-input': { fontSize: 14, fontWeight: 400, color: '#6B7280' }
          }}
          variant="outlined"
          size='small'
        />
        <TextField
          placeholder='Add New Defect'
          value={detailAdd.commandName}
          onKeyDown={(e) => e.stopPropagation()}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDetailAdd({
              ...detailAdd,
              commandName: event.target.value
            })
          }
          className='!bg-primary !rounded !w-1/2'
          sx={{
            '.MuiInputBase-root': { border: '1px solid #6B7280' },
            '.MuiInputBase-input': { fontSize: 14, fontWeight: 400, color: '#6B7280' }
          }}
          variant="outlined"
          size='small'
        />
      </div>
      <Button className='!w-4 !h-4 !ml-3 !mr-2' variant='text'>
        <CloseIcon className='text-red-100' onClick={() => { setDefectName(''); setIsInput(false) }} />
      </Button>
      {
        isLoading || isLoadingAdd ? (
          <CircularProgress className='!h-7 !w-7' />
        ) : !isLoading && !isLoadingAdd && (
          <Button className='!w-4 !h-4' variant='text'>
            <DoneIcon
              className='text-green-100'
              onClick={() =>
                detailAdd.defectName && detailAdd.commandName && addItem()
              }
            />
          </Button>
        )
      }
    </div>
  )
}

export default AddItem