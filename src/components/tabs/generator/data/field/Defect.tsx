import { Dispatch, SetStateAction } from "react"
import { Defects, Values } from "../../../../../models"
import { Title } from "../../../../../mui/customize"
import { t } from "i18next"

interface IProps {
  defects: Defects[],
  values: Values,
  setValues: Dispatch<SetStateAction<Values>>
}

function Defect({ defects, values, setValues }: IProps) {
  return (
    <div>
      <Title className="!mb-1.5">{t('defect_type')}</Title>
      <ul className="grid grid-cols-4 grid-rows-[80px] gap-2.5">
        {defects.length && defects.map((defect: Defects) => (
          <li
            key={defect.id}
            onClick={() => setValues({ ...values, defect: defect.id })}
            className={`flex text-center transition cursor-pointer rounded-md justify-center items-center bg-primary 
          border border-solid border-border ${values.defect === defect.id && '!border-active'}`}
          >{defect.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Defect