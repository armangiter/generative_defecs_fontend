import { Dispatch, SetStateAction, useState } from "react"
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
  isLoadingD: boolean,
  setData: Dispatch<SetStateAction<Data>>,
  setIsLoadingD: Dispatch<SetStateAction<boolean>>,
  createMask: () => void,
  updateDefects: (id: number) => void
}

function Field({ data, setData, createMask, isLoading, setIsLoadingD, isLoadingD, updateDefects }: IProps) {

  const { numImg, defects: { value: defectValue }, models: { value: ModelValue } } = data

  return (
    <div className="w-1/2 gap-6 flex flex-col justify-start mb-auto h-full">
      <Part setIsLoadingD={setIsLoadingD} data={data} setData={setData} updateDefects={updateDefects} />
      <NumImg data={data} setData={setData} />
      <Defect isLoadingD={isLoadingD} data={data} setData={setData} />
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