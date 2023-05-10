import { Label } from "../../../mui/customize"
import { DefectType, Result, ResultImg } from "../../../models";
import DetailCard from './modal/DetailCard'
import i18next from 'i18next';
import { updateUrl } from "../../../helper";

interface IProps {
  data: Result,
  listDefect: DefectType[]
}

const ListResult = ({ listDefect, data }: IProps) => {

  const { t } = i18next;

  return (
    <li className='bg-dark-300 p-2 rounded-md	'>
      <Label>time</Label>
      <ul className="p-1 border border-light-400 h-12 gap-1 rounded flex items-center justify-start">
        {data.result_images.slice(0, data.result_images.length > 4 ? 3 : 4).map((item: ResultImg) =>
          <li key={item.id} className="w-1/4 h-full">
            <img src={updateUrl(item.file)} alt='result' className="w-full h-full object-cover rounded opacity-[0.85]" />
          </li>
        )}
        {data.result_images.length > 4 && <DetailCard data={data} />}
      </ul>
      <p className='w-full mt-2 opacity-[0.8] rounded px-3 py-1.5 font-normal text-xs text-primary bg-dark-200' >
        {t('type')}: {!!listDefect && !!listDefect.length && listDefect.find(item => item.id === data.defect_type_id)?.name}
      </p>
      <p className='w-full mt-2 opacity-[0.8] rounded px-3 py-1.5 font-normal text-xs text-primary bg-dark-200' >
        {t('model')}: Scratch-1
        {/* {t('model')}: {data.defect_model_id} */}
      </p>
    </li>
  )
}

export default ListResult