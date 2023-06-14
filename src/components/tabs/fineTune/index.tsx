import { useState, useEffect } from "react";
import DefectType from "./DefectType"
import UploadImage from "./UploadImage"
import { t } from 'i18next';
import { DefectType as Defect, Url } from "../../../models";
import { request } from "../../../services/api";
import { urlToLocal } from "../../../helper";

interface IProps {
  listDefect: Defect[] | undefined,
  isLoading: boolean,
  getListDefect: () => void
}

const FineTune = ({ getListDefect, listDefect, isLoading }: IProps) => {

  const [urlUploaded, setUrlUploaded] = useState<Url[]>([])
  const [defect, setDefect] = useState<number>();

  const getListImage = () => {
    request.listImage()
      .then(response => {
        const responseUrl = response.data
        setUrlUploaded(responseUrl.reverse())
        responseUrl.map(async (item: Url) => {
          const blob = await urlToLocal(item.file)
          let listUrl = responseUrl
          const urlToUpdate = listUrl.find((i: Url) => i.id === item.id);
          if (urlToUpdate) {
            urlToUpdate.isLoaded = true;
            urlToUpdate.blob = blob;
            setUrlUploaded([...listUrl]);
          }
        })
      })
  }

  useEffect(() => {
    if (listDefect) {
      setDefect(listDefect[0].id)
    }
  }, [listDefect])

  useEffect(() => {
    getListImage()
  }, [])

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('fine_tune_defect_types')}</p>
      <div className='flex flex-col md:flex-row items-start justify-center gap-5 md:gap-8 mt-12'>
        <UploadImage
          defect={defect}
          getListImage={getListImage}
          urlUploaded={urlUploaded}
          setUrlUploaded={setUrlUploaded}
        />
        <DefectType
          getListImage={getListImage}
          defect={defect}
          setDefect={setDefect}
          listDefect={listDefect}
          isLoading={isLoading}
          getListDefect={getListDefect}
        />
      </div>
    </div>
  )
}

export default FineTune