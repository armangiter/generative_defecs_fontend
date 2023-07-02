import { Dispatch, SetStateAction } from 'react'
import { t } from "i18next"
import { Head } from "../../../mui/customize"
import { Defects, Values } from "../../../models"

// Components
import UploadImage from "./image/UploadImage"
import Field from "./data"
import { useState } from "react"

interface IProps {
  isOpen: boolean,
}

function Generator({ isOpen }: IProps) {

  const [defects, setDefects] = useState<Defects[]>([
    { id: 1, name: 'Print Imperfect' },
    { id: 2, name: 'Crack' },
    { id: 3, name: 'Scratch' },
    { id: 4, name: 'Poke' },
  ])
  const [values, setValues] = useState<Values>({
    defect: defects[0].id
  })

  return (
    <div>
      <Head>{t('generate_new_image')}</Head>
      <div className="flex items-center justify-center gap-8">
        <UploadImage isOpen={isOpen} />
        <Field defects={defects} values={values} setValues={setValues} />
      </div>
    </div>
  )
}

export default Generator