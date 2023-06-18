import { useState, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next';
import filter from '../../../../assets/icons/filter.svg';
import PreviewDate from './PreviewDate';
import { TimeDate } from '../../../../models';
import DatePicker from './DatePicker';
import { Menu } from '@mui/material';

interface IProps {
  editDateRange: TimeDate[],
  setEditDateRange: Dispatch<SetStateAction<TimeDate[]>>,
  updateDateRange: (name: string) => void,
}

const FilterDate = ({ editDateRange, setEditDateRange, updateDateRange }: IProps) => {

  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const open = Boolean(anchorEl);
  const closeModal = () => setAnchorEl(null);

  return (
    <div className='flex items-center justify-between my-8 flex-wrap gap-3'>
      <div className='flex items-center'>
        {/* <img src={filter} alt='filter' /> */}
        <p className='text-sm font-medium text-light-300 ml-2'>{t('filters')}</p>
      </div>
      <div>
        <PreviewDate
          editDateRange={editDateRange}
          setEditDateRange={setEditDateRange}
          setAnchorEl={setAnchorEl}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          sx={{
            '.MuiList-root': { padding: '0' },
            ".css-6hp17o-MuiList-root-MuiMenu-list": { maxHeight: '100%', minWidth: '480px' },
            '.MuiPaper-root': {
              border: 'none',
              overflow: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 3px 14px rgba(19, 10, 46, 0.03), 0px 1px 3px rgba(19, 10, 46, 0.13)',
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
            closeModal={closeModal}
            editDateRange={editDateRange}
            updateDateRange={updateDateRange}
            setEditDateRange={setEditDateRange}
          />
        </Menu>
      </div>
    </div>
  )
}

export default FilterDate