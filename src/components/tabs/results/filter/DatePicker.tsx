import { useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { TimeDate } from '../../../../models';
import ListFilter from './changeDate/ListFilter';
import { Button } from '@mui/material'

// DatePicker
import { DateRange } from 'react-date-range';
import { enAU, ja } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface IProps {
  editDateRange: TimeDate[],
  setEditDateRange: Dispatch<SetStateAction<TimeDate[]>>,
  updateDateRange: (name: string) => void,
  closeModal: () => void
}

const DatePicker = ({ closeModal, updateDateRange, editDateRange, setEditDateRange }: IProps) => {

  const { i18n } = useTranslation();
  const [filter, setFilter] = useState<number>(1)
  const changeDatePicker = (newDate: any) => {
    setFilter(8)
    setEditDateRange(newDate)
  }

  return (
    <div className='flex justify-center items-start py-2 pr-1 pl-2'>
      <ListFilter
        filter={filter}
        setFilter={setFilter}
        editDateRange={editDateRange}
        setEditDateRange={setEditDateRange}
      />
      <div className='border-0 border-l-[1px] border-l-[#F3F4F6]'>
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => changeDatePicker([item.selection])}
          moveRangeOnFirstSelection={false}
          locale={i18n.language === 'jp' ? ja : enAU}
          className='bg-dark-400'
          ranges={editDateRange}
        />
        <div className='flex justify-end items-center gap-2 p-3 pb-1 border-0 border-t-[1px] border-t-[#F3F4F6]'>
          <Button
            className='!bg-transparent !text-light-600 !shadow-none !border !border-solid !border-dark-400'
            variant='contained'
            color='primary'
            onClick={() => {
              updateDateRange('cancel');
              closeModal();
              setFilter(8);
            }}
          >Cancel</Button>
          <Button
            variant='contained'
            color='success'
            onClick={() => {
              updateDateRange('update');
              closeModal();
            }}
          >Set Date</Button>
        </div>
      </div>
    </div>
  )
}

export default DatePicker