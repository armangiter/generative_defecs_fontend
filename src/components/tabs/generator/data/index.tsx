import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@mui/material"
import { t } from "i18next"

// Components
import Defect from "./field/Defect"
import NumImg from "./field/NumImg"
import Part from "./field/Part"
import { Defects, Values } from "../../../../models"

interface IProps {
  defects: Defects,
  values: Values,
  setValues: Dispatch<SetStateAction<Values>>
}

function Field({ defects, values, setValues }: IProps) {

  const [part, setPart] = useState<number>(10);

  return (
    <div className="w-1/2 gap-6 flex flex-col justify-start mb-auto h-full">
      <Part part={part} setPart={setPart} />
      <NumImg />
      <Defect defects={defects} values={values} setValues={setValues} />
      <Button className="!bg-btn" color="secondary" fullWidth>{t('generate')}</Button>
    </div>
  )
}

export default Field