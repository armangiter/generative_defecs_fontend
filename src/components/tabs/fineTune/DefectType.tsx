import { useState } from 'react'
import AddItem from './AddItem';
import StartTuning from './modal/StartTuning';
import { Label, SelectList } from '../../../mui/customize';

// MUI
import { MenuItem, SelectChangeEvent, Button, FormControl } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const DefectType = () => {

  const [defect, setDefect] = useState<string>('Ten')
  const [open, setOpen] = useState<boolean>(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [listMenu, setListMenu] = useState<string[]>(['Ten', 'Twenty', 'Thirty'])
  const changeDefect = (event: SelectChangeEvent<unknown>) => setDefect(event.target.value as string)

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className='w-1/2 flex flex-col'>
      <FormControl fullWidth>
        <Label className='mb-1'>Defect Type</Label>
        <SelectList
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={defect}
          onChange={changeDefect}
          className='bg-dark-200'
          color='secondary'
          size='small'
        >
          {isInput ?
            <AddItem
              listMenu={listMenu}
              setListMenu={setListMenu}
            /> :
            <MenuItem className='!p-0 !mb-1.5'>
              <Button
                variant='text'
                onClick={event => {
                  event.stopPropagation()
                  setIsInput(!isInput)
                }}
                className='!flex !items-center !justify-start !w-full !h-full !py-2 !pr-4 !pl-[14px]'
              >
                <AddCircleOutlinedIcon className='!text-light-100' />
                <p className='font-normal	text-sm	text-light-600 ml-2'>Add New Defect</p>
              </Button>
            </MenuItem>
          }
          {listMenu.map((item: string, idx: number) =>
            <MenuItem
              sx={{ color: '#F9F9F9', '&:hover': { background: 'rgba(116, 122, 139, 0.15)' } }}
              key={idx}
              value={item}
            >{item}</MenuItem>
          )}
        </SelectList>
      </FormControl>
      <StartTuning />
    </div>
  )
}

export default DefectType