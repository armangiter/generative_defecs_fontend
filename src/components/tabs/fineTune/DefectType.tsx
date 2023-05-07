import { useState, useEffect } from 'react'
import AddItem from './AddItem';
import { DefectType as Defect } from '../../../models';
import StartTuning from './modal/StartTuning';
import { Label, SelectList } from '../../../mui/customize';
import i18next from 'i18next';

// MUI
import { MenuItem, SelectChangeEvent, Button, FormControl, CircularProgress } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

// Services
import { request } from '../../../services/api';

const DefectType = () => {

  const { t } = i18next;
  const [open, setOpen] = useState<boolean>(false);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [listDefect, setListDefect] = useState<Defect[]>();
  const [defect, setDefect] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const changeDefect = (event: SelectChangeEvent<unknown>) => setDefect(event.target.value as number)

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const getListDefect = () => {
    setIsLoading(true)
    request.listDefect()
      .then(response => {
        setIsLoading(false)
        if (response.data.length) {
          setListDefect(response.data)
          setDefect(response.data[0].id)
        }
      })
      .catch(() => setIsLoading(false))
  }

  useEffect(() => {
    getListDefect()
  }, [])

  return (
    <div className='w-full md:w-1/2 flex flex-col'>
      <FormControl fullWidth>
        <Label className='!mb-1'>{t('defect_type')}</Label>
        <SelectList
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={defect || ''}
          onChange={changeDefect}
          sx={{ '.MuiPaper-root': { height: '300px' } }}
          className='bg-dark-200'
          color='secondary'
          size='small'
        >
          {isInput ?
            <AddItem
              isLoading={isLoading}
              setIsInput={setIsInput}
              getListDefect={getListDefect}
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
                <p className='font-normal	text-sm	text-light-600 ml-2'>{t('add_new_defect')}</p>
              </Button>
            </MenuItem>
          }
          {isLoading ? (
            <CircularProgress
              className='!my-2 !mx-auto !block'
            />
          ) : listDefect && listDefect.length && (
            listDefect.reverse().map((item: Defect) =>
              <MenuItem
                sx={{ color: '#F9F9F9', '&:hover': { background: 'rgba(116, 122, 139, 0.15)' } }}
                key={item.id}
                value={item.id}
              >{item.name}</MenuItem>
            )
          )}
        </SelectList>
      </FormControl>
      <StartTuning />
    </div>
  )
}

export default DefectType