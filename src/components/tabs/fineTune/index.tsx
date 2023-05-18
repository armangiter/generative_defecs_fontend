import { useState, useEffect } from "react";
import DefectType from "./DefectType"
import UploadImage from "./UploadImage"
import i18next from 'i18next';
import { DefectType as Defect } from "../../../models";

interface IProps {
  listDefect: Defect[] | undefined,
  isLoading: boolean,
  getListDefect: () => void
}

const FineTune = ({ getListDefect, listDefect, isLoading }: IProps) => {

  const [defect, setDefect] = useState<number>();
  const { t } = i18next;

  useEffect(() => {
    if (listDefect) {
      setDefect(listDefect[0].id)
    }
  }, [listDefect])

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('fine_tune_defect_types')}</p>
      <div className='flex flex-col md:flex-row items-start justify-center md:gap-8 mt-12'>
        <UploadImage defect={defect} />
        <DefectType defect={defect} setDefect={setDefect} listDefect={listDefect} isLoading={isLoading} getListDefect={getListDefect} />
      </div>
    </div>
  )
}

export default FineTune