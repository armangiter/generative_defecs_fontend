import { useState, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next';
import filter from '../../../../assets/icons/filter.svg';
import PreviewDate from './PreviewDate';
import { TimeDate } from '../../../../models';
import DatePicker from './DatePicker';
import { Menu } from '@mui/material';
import { addDays } from 'date-fns';

interface IProps {
  dateRange: TimeDate[],
  setDateRange: Dispatch<SetStateAction<TimeDate[]>>
}

const FilterDate = ({ dateRange, setDateRange }: IProps) => {

  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const open = Boolean(anchorEl);
  const closeModal = () => setAnchorEl(null);

  return (
    <div className='flex items-center justify-between my-8'>
      <div className='flex items-center'>
        <img src={filter} alt='filter' />
        <p className='text-sm font-medium text-light-300 ml-2'>{t('filters')}</p>
      </div>
      <div>
        <PreviewDate
          dateRange={dateRange}
          setDateRange={setDateRange}
          setAnchorEl={setAnchorEl}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          sx={{
            ".css-6hp17o-MuiList-root-MuiMenu-list": { maxHeight: '100%' },
            '.MuiPaper-root': {
              border: 'none',
              boxShadow: '0px 3px 14px rgba(19, 10, 46, 0.03), 0px 1px 3px rgba(19, 10, 46, 0.13)',
              borderRadius: '8px'
            },
          }}
          onClose={closeModal}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <DatePicker
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </Menu>
      </div>
    </div>
  )
}

export default FilterDate