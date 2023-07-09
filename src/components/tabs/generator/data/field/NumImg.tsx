import { Dispatch, SetStateAction } from "react"
import { Input, Title } from "../../../../../mui/customize"
import { t } from "i18next"
import { Data } from "../../../../../models"
import Info from "../../../../../assets/icons/Info"

interface IProps {
  data: Data,
  setData: Dispatch<SetStateAction<Data>>
}

function NumImg({ data, setData }: IProps) {

  const { numImg } = data

  return (
    <div>
      <div className='flex items-center justify-start gap-1.5 mb-1.5'>
        <Title>{t('number_of_image')}</Title>
        <Info infoText={t('num_img_info').replace('X', import.meta.env.VITE_MAX_NUMBER_IMAGE)} />
      </div>
      <Input
        fullWidth
        value={numImg}
        type="number"
        InputProps={{ inputProps: { min: 1, max: import.meta.env.VITE_MAX_NUMBER_IMAGE } }}
        onChange={(event) => {
          const newValue = +event.target.value
          console.log(newValue);
          console.log(typeof newValue);

          if (newValue && newValue <= import.meta.env.VITE_MAX_NUMBER_IMAGE) {
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