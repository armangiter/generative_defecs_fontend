import { useState } from "react";
import { Label } from "../../../mui/customize"
import { Models, Result, ResultImg } from "../../../models";
import DetailCard from './modal/DetailCard'
import i18next from 'i18next';
import { updateUrl } from "../../../helper";

interface IProps {
  data: Result,
  listModel: Models[]
}

const ListResult = ({ listModel, data }: IProps) => {

  const { t } = i18next;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className='bg-dark-200 p-2 rounded-md'>
      <Label className="!text-light-300">{data.created.split('T')[0]}</Label>
      <ul className="p-1 h-12 gap-1 rounded flex items-center justify-start">
        {data.result_images.slice(0, data.result_images.length > 4 ? 3 : 4).map((item: ResultImg) =>
          <li key={item.id} className="w-1/4 h-full">
            <img onClick={() => setOpen(true)} src={updateUrl(item.file)} alt='result' className="w-full h-full object-cover rounded opacity-[0.85] cursor-pointer" />
          </li>
        )}
        <DetailCard
          open={open}
          setOpen={setOpen}
          data={data}
          listModel={listModel}
        />
      </ul>
      <p className='w-full mt-2 opacity-[0.8] rounded px-3 py-1.5 font-normal text-xs text-primary bg-dark-200' >
        {t('type')}: {data.defect_type.name}
      </p>
      <p className='w-full mt-2 opacity-[0.8] rounded px-3 py-1.5 font-normal text-xs text-primary bg-dark-200' >
        {t('model')}: {
          listModel && listModel.length ?
            listModel.find((item: Models) =>
              item.id === data.defect_model_id
            )?.name : 'Loading...'
        }
        {/* {t('model')}: {data.defect_model_id} */}
      </p>
    </li>
  )
}

export default ListResult