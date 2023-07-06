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
  urlUploaded: string,
  isLoading: boolean,
  isLoadingD: boolean,
  setData: Dispatch<SetStateAction<Data>>,
  setIsLoadingD: Dispatch<SetStateAction<boolean>>,
  createMask: (inRedirect) => void,
  updateDefects: (id: number) => void
}

function Field({ data, urlUploaded, setData, createMask, isLoading, setIsLoadingD, isLoadingD, updateDefects }: IProps) {

  const [activeBtn, setActiveBtn] = useState<string>('')
  const { numImg, defects: { value: defectValue }, models: { value: ModelValue } } = data

  const isDisableButton = numImg && defectValue && ModelValue && urlUploaded && !isLoadingD ? false : true

  const handleGenerate = (isRedirect: boolean, type: string) => {
    createMask(isRedirect)
    setActiveBtn(type)
  }

  return (
    <div className="w-1/2 gap-6 flex flex-col justify-start mb-auto h-full">
      <Part setIsLoadingD={setIsLoadingD} data={data} setData={setData} updateDefects={updateDefects} />
      <NumImg data={data} setData={setData} />
      <Defect isLoadingD={isLoadingD} data={data} setData={setData} />
      <div className="flex items-center justify-between gap-4">
        <LoadingButton
          disabled={isDisableButton}
          className="!bg-primary"
          color="primary"
          loading={isLoading && (activeBtn === 'first')}
          onClick={() => handleGenerate(false, 'first')}
          fullWidth
        >{t('generate_in_background')}</LoadingButton>
        <LoadingButton
          disabled={isDisableButton}
          className="!bg-btn"
          color="secondary"
          loading={isLoading && activeBtn === 'second'}
          onClick={() => handleGenerate(true, 'second')}
          fullWidth
        >{t('generate')}</LoadingButton>
      </div>
    </div>
  )
}

export default Field