import { Dispatch, SetStateAction } from "react"
import { Data, Defects } from "../../../../../models"
import { Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { CircularProgress } from "@mui/material"
import Info from "../../../../../assets/icons/Info"
import Chip from "../../../../../assets/icons/Chip"
import Crack from "../../../../../assets/icons/Crack"
import Scratch from "../../../../../assets/icons/Scratch"
import Indentation from "../../../../../assets/icons/Indentation"

interface IProps {
  data: Data,
  isLoadingD: boolean,
  setData: Dispatch<SetStateAction<Data>>
}

function Defect({ data, setData, isLoadingD }: IProps) {

  const { defects: { list, value } } = data

  return (
    <div>
      <div className='flex items-center justify-start gap-1.5 mb-1.5'>
        <Title>{t('defect_type')}</Title>
        <Info infoText={t('defect_info')} />
      </div>
      <ul className="relative grid grid-cols-4 min-h-[80px] grid-rows-[auto] gap-2.5">
        {isLoadingD ? (
          <CircularProgress className="!absolute !left-1/2 !top-1/2 !transform !-translate-x-1/2 !-translate-y-1/2" />
        ) : !!list.length && (
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
              className={`flex text-center transition cursor-pointer h-20 rounded-md justify-center items-center bg-primary gap-2
              border border-solid border-border ${value === defect.id && '!border-active'}`}
            >
              {
                defect.name.toLowerCase() === 'chip' ? <Chip /> :
                  defect.name.toLowerCase() === 'crack' ? <Crack /> :
                    defect.name.toLowerCase() === 'scratch' ? <Scratch /> :
                      defect.name.toLowerCase() === 'indentation' ? <Indentation /> :
                        null
              }
              {defect.name}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Defect