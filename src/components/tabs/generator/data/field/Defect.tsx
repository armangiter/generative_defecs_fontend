import { Dispatch, SetStateAction } from "react"
import { Data, Defects } from "../../../../../models"
import { Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { CircularProgress } from "@mui/material"

interface IProps {
  data: Data,
  setData: Dispatch<SetStateAction<Data>>
}

function Defect({ data, setData }: IProps) {

  const { defects: { list, value } } = data

  return (
    <div>
      <Title className="!mb-1.5">{t('defect_type')}</Title>
      <ul className="relative grid grid-cols-4 min-h-[80px] grid-rows-[auto] gap-2.5">
        {list.length ? (
          list.map((defect: Defects) => (
            <li
              key={defect.id}
              onClick={() => setData({
                ...data,
                defects: {
                  ...data.defects,
                  value: defect.id
                }
              })}
              className={`flex text-center transition cursor-pointer h-20 rounded-md justify-center items-center bg-primary 
              border border-solid border-border ${value === defect.id && '!border-active'}`}
            >{defect.name}</li>
          ))
        ) : (
          <CircularProgress className="!absolute !left-1/2 !top-1/2 !transform !-translate-x-1/2 !-translate-y-1/2" />
        )}
      </ul>
    </div>
  )
}

export default Defect