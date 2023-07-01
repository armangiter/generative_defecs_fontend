import { Input, Title } from "../../../../../mui/customize"
import { t } from "i18next"

function NumImg() {
  return (
    <div>
      <Title className="!mb-1.5">{t('number_of_image')}</Title>
      <Input fullWidth type="number" />
    </div>
  )
}

export default NumImg