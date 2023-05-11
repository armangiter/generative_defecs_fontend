import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { addMonths } from 'date-fns';
import i18next from 'i18next';
import { TimeDate } from '../../../../models';
import { ButtonDate } from '../../../../mui/customize';
import arrow from '../../../../assets/icons/arrow.svg';
import calendar from '../../../../assets/icons/calendar.svg';

interface IProps {
  editDateRange: TimeDate[],
  setEditDateRange: Dispatch<SetStateAction<TimeDate[]>>,
  setAnchorEl: Dispatch<SetStateAction<null | HTMLElement | undefined>>,
}

const PreviewDate = ({ editDateRange, setEditDateRange, setAnchorEl }: IProps) => {

  const { t } = i18next;
  const shortNameOfMonth = [
    t("Jan"), t("Feb"), t("Mar"), t("Apr"), t("May"), t("Jun"),
    t("Jul"), t("Aug"), t("Sep"), t("Oct"), t("Nov"), t("Dec")
  ];
  const openModal = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event?.currentTarget)
  const changeDate = (type: string) => type === 'prev' ? setEditDateRange([{
    ...editDateRange[0],
    startDate: addMonths(editDateRange[0].startDate, -1),
  }]) : setEditDateRange([{
    ...editDateRange[0],
    endDate: addMonths(editDateRange[0].endDate, 1),
  }])

  return (
    <div className='flex items-center justify-center gap-2'>
      <ButtonDate
        className='!px-3'
        onClick={() => changeDate('prev')}
      >
        <img className='!rotate-180' src={arrow} alt='arrow' />
      </ButtonDate>
      <ButtonDate
        className='!w-52 !flex !items-center !justify-center !gap-3'
        onClick={openModal}
      >
        <img src={calendar} alt='calendar' />
        <p className='text-light-100 text-sm font-normal'>
          {`
            ${editDateRange[0] && shortNameOfMonth[editDateRange[0].startDate.getMonth()]} ${editDateRange[0] && editDateRange[0].startDate.getDate()} - 
            ${editDateRange[0] && shortNameOfMonth[editDateRange[0].endDate.getMonth()]} ${editDateRange[0] && editDateRange[0].endDate.getDate()}
            `}
        </p>
      </ButtonDate>
      <ButtonDate
        className='!px-3'
        onClick={() => changeDate('next')}
      >
        <img src={arrow} alt='arrow' />
      </ButtonDate>
    </div>
  )
}

export default PreviewDate