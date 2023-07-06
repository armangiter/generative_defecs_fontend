import { Dispatch, SetStateAction } from "react"
import { MenuItem, Tooltip } from "@mui/material"
import { Selector, Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { Data } from "../../../../../models"
import Info from "../../../../../assets/icons/Info"

interface IProps {
  data: Data,
  setIsLoadingD: boolean,
  setData: Dispatch<SetStateAction<Data>>,
  updateDefects: (id: number) => void
}

function Part({ data, setData, setIsLoadingD, updateDefects }: IProps) {

  const { models: { list, value } } = data

  return (
    <div>
      <div className='flex items-center justify-start gap-1.5 mb-1.5'>
        <Title>{t('part')}</Title>
        <Info infoText={t('part_info')} />
      </div>
      <Selector
        value={value || ''}
        fullWidth
        onChange={(event) => {
          setIsLoadingD(true)
          const newValue: number = event.target.value
          updateDefects(newValue)
          typeof newValue === 'number' &&
            setData({
              ...data,
              models: {
                ...data.models,
                value: newValue
              }
            })
        }}
      >
        {!!list.length && list.map(model => (
          <MenuItem key={model.id} value={model.id}>{model.name}</MenuItem>
        ))}
      </Selector>
    </div>
  )
}

export default Part