import { Dispatch, SetStateAction } from "react";
import { TimeDate } from "../../../../../models";
import { Button } from "@mui/material";
import { addDays } from 'date-fns';

interface Filters {
  id: number,
  day: number | null,
  title: string
}

interface IProps {
  filter: number,
  editDateRange: TimeDate[],
  setFilter: Dispatch<SetStateAction<number>>,
  setEditDateRange: Dispatch<SetStateAction<TimeDate[]>>
}

const ListFilter = ({ filter, setFilter,editDateRange, setEditDateRange }: IProps) => {

  const listFilter: Filters[] = [
    { id: 1, day: 7, title: 'Last 7 days' },
    { id: 2, day: 14, title: 'Last 14 days' },
    { id: 3, day: 30, title: 'Last 30 days' },
    { id: 4, day: 90, title: 'Last 3 months' },
    { id: 5, day: 364, title: 'Last 12 months' },
    { id: 6, day: null, title: 'Month to date' },
    { id: 7, day: null, title: 'Quarter to date' },
    { id: 8, day: null, title: 'Custom' }
  ]

  const changeValDate = (startDate: Date) => setEditDateRange([
    {
      ...editDateRange[0],
      startDate
    }
  ])

  const updateDate = (data: Filters) => {
    setFilter(data.id)
    const newDate: Date = new Date()
    switch (data.title) {
      case 'Month to date':
        const startOfMonth = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
        changeValDate(startOfMonth)
        break;
      case 'Quarter to date':
        const startOfYear = new Date(newDate.getFullYear(), 0, 1);
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysSinceStartOfYear = Math.floor((newDate - startOfYear) / millisecondsPerDay) + 1;

        changeValDate(addDays(newDate, -Math.floor(daysSinceStartOfYear / 4)))
        break;
      case 'Custom':
        break;
      default:
        data.day &&
          changeValDate(addDays(newDate, -data.day))
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full pl-2">
      {listFilter.map((item: Filters) =>
        <Button
          key={item.id}
          color='success'
          onClick={() => updateDate(item)}
          className={`
          !mr-auto !w-full !text-light-100 !text-sm !font-light hover:!text-light-700 !flex !justify-start 
          ${filter === item.id && '!bg-dark-600 !text-light-700'}
          `}
        >
          {item.title}
        </Button>
      )}
    </div>
  )
}

export default ListFilter