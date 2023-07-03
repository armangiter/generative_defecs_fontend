import { Dispatch, SetStateAction } from "react"
import { MenuItem } from "@mui/material"
import { Selector, Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { Data } from "../../../../../models"

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
      <Title className="!mb-1.5">{t('part')}</Title>
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