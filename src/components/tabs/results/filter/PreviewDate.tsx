import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { addMonths } from 'date-fns';
import i18next from 'i18next';
import { TimeDate } from '../../../../models';
import { ButtonDate } from '../../../../mui/customize';
import arrow from '../../../../assets/icons/arrow.svg';
import calendar from '../../../../assets/icons/calendar.svg';

interface IProps {
  dateRange: TimeDate[],
  setDateRange: Dispatch<SetStateAction<TimeDate[]>>,
  setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>,
}

const PreviewDate = ({ dateRange, setDateRange, setAnchorEl }: IProps) => {

  const { t } = i18next;
  const shortNameOfMonth = [
    t("Jan"), t("Feb"), t("Mar"), t("Apr"), t("May"), t("Jun"),
    t("Jul"), t("Aug"), t("Sep"), t("Oct"), t("Nov"), t("Dec")
  ];
  const openModal = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event?.currentTarget)
  const changeDate = (type: string) => type === 'prev' ? setDateRange([{
    ...dateRange[0],
    startDate: addMonths(dateRange[0].startDate, -1),
  }]) : setDateRange([{
    ...dateRange[0],
    endDate: addMonths(dateRange[0].endDate, 1),
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
            ${dateRange[0] && shortNameOfMonth[dateRange[0].startDate.getMonth()]} ${dateRange[0] && dateRange[0].startDate.getDate()} - 
            ${dateRange[0] && shortNameOfMonth[dateRange[0].endDate.getMonth()]} ${dateRange[0] && dateRange[0].endDate.getDate()}
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