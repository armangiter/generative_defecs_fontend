import { t } from "i18next"
import { Title } from "../../../../mui/customize"
import Gallery from "../../../../assets/icons/Gallery"
import { Button } from "@mui/material"

function UploadImage() {

  const readDataURL = () => {

  }

  return (
    <div className="w-1/2">
      <p>{t('your_image')}</p>
      <div
        className="relative w-full h-96 bg-dark-200 border border-dashed 
        border-border rounded-md flex justify-center items-center flex-col py-6 bg-primary"
      >
        <input
          accept="image/png, image/jpeg"
          onChange={readDataURL}
          type="file"
          className='absolute w-full h-full opacity-0 cursor-pointer z-10'
        />
        <Gallery />
        <Title className='!mt-4 !mb-6'>{t('drag_drop_text')}</Title>
        <Button className='!rounded-md !border-border !text-active' variant='outlined' color='secondary'>
          {t('browse')}
        </Button>
      </div>
    </div>
  )
}

export default UploadImage