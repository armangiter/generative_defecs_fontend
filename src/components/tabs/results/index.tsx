import { useEffect, useState, useRef } from "react";
import ListResult from "./ListResult"
import { DefectType, Models, Result, TimeDate } from "../../../models"
import i18next from 'i18next';
import { request } from "../../../services/api";
import FilterDate from "./filter/FilterDate";
import { addDays } from 'date-fns';
import { CircularProgress, Pagination } from "@mui/material";

interface IProps {
  value: number,
}

const Results = ({ value }: IProps) => {

  const { t } = i18next;
  const pageRef = useRef()
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [listResult, setListResult] = useState<Result[]>()
  const [listModel, setListModel] = useState<Models[]>([])
  const [dateRange, setDateRange] = useState<TimeDate[]>([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [editDateRange, setEditDateRange] = useState<TimeDate[]>([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const getListResult = () => {
    setIsLoading(true)
    request.getResult()
      .then(response => {
        setIsLoading(false)
        setListResult(response.data)
        request.getModels()
          .then(res => setListModel(res.data))
      })
  }

  useEffect(() => {
    getListResult()
  }, [])

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const filteredPagination = listResult?.filter((item: Result, idx: number) => {
    const minPage = page === 1 ? 0 : (page - 1) * 12
    const maxPage = page * 12
    return idx + 1 <= maxPage && idx + 1 > minPage
  })

  const filteredDate = filteredPagination?.filter((item: Result) =>
    new Date(dateRange[0].startDate) <= new Date(item.created) && new Date(item.created) <= new Date(dateRange[0].endDate)
  );

  const updateDateRange = (name: string) => name === 'cancel' ? setEditDateRange(dateRange) : setDateRange(editDateRange);

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('your_Results')}</p>
      <FilterDate
        editDateRange={editDateRange}
        updateDateRange={updateDateRange}
        setEditDateRange={setEditDateRange}
      />
      {!!filteredDate && !!filteredDate.length ? (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {
            filteredDate.map((item: Result, idx: number) => (
              <ListResult key={idx} data={item} listModel={listModel} />
            ))
          }
        </ul>
      ) : isLoading ? (
        <CircularProgress
          className="!mx-auto !block my-24"
        />
      ) : !isLoading && (
        <p className="block text-center text-lg font-semibold">{t('empty_results')}</p>
      )}
      {
        !!listResult && !!listResult.length && listResult.length > 12 &&
        <Pagination
          count={Math.ceil(listResult.length / 12)}
          page={page}
          onChange={(event: React.MouseEvent<HTMLButtonElement> | null, newPage) => handleChangePage(event, newPage)}
          ref={pageRef}
          sx={{
            marginTop: '32px',
            '.MuiButtonBase-root': {
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#A5ACBA',
            },
            '.MuiPagination-ul': {
              background: '#FFFFFF',
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.04)',
              borderRadius: '25px',
              width: 'fit-content',
              margin: '0 auto',
            },
            '.Mui-selected': {
              background: 'transparent !important',
              color: '#F97316'
            }
          }}
        />
      }
    </div>
  )
}

export default Results