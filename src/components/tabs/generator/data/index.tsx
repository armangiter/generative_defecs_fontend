import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@mui/material"
import { t } from "i18next"

// Components
import Defect from "./field/Defect"
import NumImg from "./field/NumImg"
import Part from "./field/Part"
import { Data } from "../../../../models"
import { LoadingButton } from "@mui/lab"

interface IProps {
  data: Data,
  isLoading: boolean,
  setData: Dispatch<SetStateAction<Data>>,
  createMask: () => void,
}

function Field({ data, setData, createMask, isLoading }: IProps) {

  const { numImg, defects: { value: defectValue }, models: { value: ModelValue } } = data

  return (
    <div className="w-1/2 gap-6 flex flex-col justify-start mb-auto h-full">
      <Part data={data} setData={setData} />
      <NumImg data={data} setData={setData} />
      <Defect data={data} setData={setData} />
      <LoadingButton
        disabled={numImg && defectValue && ModelValue ? false : true}
        className="!bg-btn"
        color="secondary"
        loading={isLoading}
        onClick={() => createMask()}
        fullWidth
      >{t('generate')}</LoadingButton>
    </div>
  )
}

export default Field