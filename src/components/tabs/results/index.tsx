import { useEffect, useState } from "react";
import ListResult from "./ListResult"
import { DefectType, Result } from "../../../models"
import i18next from 'i18next';
import { request } from "../../../services/api";
import FilterDate from "./filter/FilterDate";

interface IProps {
  listDefect: DefectType[]
}

const Results = ({ listDefect }: IProps) => {

  const { t } = i18next;
  const [listResult, setListResult] = useState<Result[]>()

  useEffect(() => {
    request.getResult()
      .then(response => {
        setListResult(response.data)
      })
  }, [])

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('your_Results')}</p>
      <FilterDate />
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {!!listResult && !!listResult.length && listResult.map((item: Result) =>
          <ListResult key={item.id} data={item} listDefect={listDefect} />
        )}
      </ul>
    </div>
  )
}

export default Results