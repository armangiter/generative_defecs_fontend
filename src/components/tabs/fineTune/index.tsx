import { useState, useEffect } from "react";
import DefectType from "./DefectType"
import UploadImage from "./UploadImage"
import { t } from 'i18next';
import { DefectType as Defect, Url } from "../../../models";
import { request } from "../../../services/api";
import { urlToLocal } from "../../../helper";
import { toast } from "react-toastify";

interface IProps {
  listDefect: Defect[] | undefined,
  isLoading: boolean,
  getListDefect: () => void
}

const FineTune = ({ getListDefect, listDefect, isLoading }: IProps) => {

  const [urlUploaded, setUrlUploaded] = useState<Url[]>([])
  const [defect, setDefect] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoadingB, setIsLoadingB] = useState<boolean>(false);

  const checkStatus = () => {
    const interval = setInterval(() => {
      request.statusFine()
        .then(res => {
          if (res.data.status !== 'training') {
            setOpen(false)
            clearInterval(interval)
            toast.success(t('over_fine_progress'), {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          } else
            setOpen(true);
        })
    }, 5000)
  }

  const getListImage = (from: string) => {
    from === 'fineTune' && setIsLoadingB(true)
    request.listImage()
      .then(response => {
        setIsLoadingB(false)
        const responseUrl = response.data
        setUrlUploaded(responseUrl.reverse())
        if (from === 'fineTune') {
          setOpen(true)
          from === 'fineTune' && checkStatus()
        };
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
    getListImage('home')
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
          openModal={open}
          setOpenModal={setOpen}
          isLoadingB={isLoadingB}
        />
      </div>
    </div>
  )
}

export default FineTune