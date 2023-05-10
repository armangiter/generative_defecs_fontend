import { Dispatch, SetStateAction, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TimeDate } from '../../../../models';
import ListFilter from './changeDate/ListFilter';

// DatePicker
import { DateRange, DateRangeProps } from 'react-date-range';
import { enAU, ja } from 'date-fns/locale';
import { addMonths } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface IProps {
  dateRange: TimeDate[],
  setDateRange: Dispatch<SetStateAction<TimeDate[]>>
}

const DatePicker = ({ dateRange, setDateRange }: IProps) => {

  const { t, i18n } = useTranslation();
  const dateRef = useRef();

  const changeDatePicker = (newDate: any) => setDateRange(newDate);
  const changeDate = () => setDateRange([{
    ...dateRange[0],
    endDate: addMonths(dateRange[0].endDate, 1),
  }])
  const shortNameOfMonth = [
    t("Jan"), t("Feb"), t("Mar"), t("Apr"), t("May"), t("Jun"),
    t("Jul"), t("Aug"), t("Sep"), t("Oct"), t("Nov"), t("Dec")
  ];
  console.log(dateRef);


  return (
    <div className='flex items-center justify-center'>
      <ListFilter />
      <DateRange
        editableDateInputs={true}
        onChange={(item: any) => changeDatePicker([item.selection])}
        moveRangeOnFirstSelection={false}
        locale={i18n.language === 'jp' ? ja : enAU}
        className='bg-dark-400'
        ranges={dateRange}
        ref={dateRef}
      />
    </div>
  )
}

export default DatePicker