import { useState, useEffect } from "react";
import DefectType from "./DefectType"
import UploadImage from "./UploadImage"
import i18next from 'i18next';
import { DefectType as Defect, Url } from "../../../models";
import { request } from "../../../services/api";
import axios from "axios";
import { urlToBlob } from "../../../helper";

interface IProps {
  listDefect: Defect[] | undefined,
  isLoading: boolean,
  getListDefect: () => void
}

const FineTune = ({ getListDefect, listDefect, isLoading }: IProps) => {

  const [urlUploaded, setUrlUploaded] = useState<Url[]>([])
  const [defect, setDefect] = useState<number>();
  const { t } = i18next;

  const getListImage = () => {
    request.listImage()
      .then(response => {
        const responseUrl = response.data
        setUrlUploaded(responseUrl.reverse())
        responseUrl.map(async (item: Url) => {
          const blob = await urlToBlob(item.file)
          let listUrl = responseUrl
          const urlToUpdate = listUrl.find((i: Url) => i.id === item.id);
          if (urlToUpdate) {
            urlToUpdate.isLoaded = true;
            urlToUpdate.file = blob;
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
      <div className='flex flex-col md:flex-row items-start justify-center md:gap-8 mt-12'>
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