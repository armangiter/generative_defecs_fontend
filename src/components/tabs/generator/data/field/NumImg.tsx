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
        value={numImg}
        onChange={(event) => {
          const newValue = event.target.value
          const pattern = /^[0-9]+$/;

          if (newValue === '' || pattern.test(newValue)) {
            setData({
              ...data,
              numImg: newValue
            })
          }
        }}
      />
    </div>
  )
}

export default NumImg