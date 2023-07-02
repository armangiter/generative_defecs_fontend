import { Dispatch, SetStateAction } from "react"
import { MenuItem } from "@mui/material"
import { Selector, Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { Data } from "../../../../../models"

interface IProps {
  data: Data,
  setData: Dispatch<SetStateAction<Data>>
}

function Part({ data, setData }: IProps) {

  const { models: { list, value } } = data

  return (
    <div>
      <Title className="!mb-1.5">{t('part')}</Title>
      <Selector
        value={value || ''}
        fullWidth
        onChange={(event) => {
          typeof event.target.value === 'number' &&
            setData({
              ...data,
              models: {
                ...data.models,
                value: event.target.value
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