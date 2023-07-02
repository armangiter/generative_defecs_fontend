import { Dispatch, SetStateAction } from "react"
import { Input, Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { Data } from "../../../../../models"

interface IProps {
  data: Data,
  setData: Dispatch<SetStateAction<Data>>
}

function NumImg({ data, setData }: IProps) {

  const { numImg } = data

  return (
    <div>
      <Title className="!mb-1.5">{t('number_of_image')}</Title>
      <Input
        fullWidth
        type="number"
        value={numImg}
        onChange={(event) => setData({
          ...data,
          numImg: +event.target.value
        })}
      />
    </div>
  )
}

export default NumImg