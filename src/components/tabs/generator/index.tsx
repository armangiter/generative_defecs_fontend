import UploadImage from "./UploadImage"
import DefectType from "./DefectType"
import i18next from 'i18next';
import { DefectType as Defect } from "../../../models";

interface IProps {
  listDefect: Defect[] | undefined
}

const Generator = ({ listDefect }: IProps) => {

  const { t } = i18next;

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('generate_new_images')}</p>
      <div className='flex flex-col md:flex-row items-start justify-center gap-8 mt-12'>
        <UploadImage />
        <DefectType
          listDefect={listDefect}
        />
      </div>
    </div>
  )
}

export default Generator