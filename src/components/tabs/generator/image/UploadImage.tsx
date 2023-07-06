import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Title } from "../../../../mui/customize"
import ListIcon from './konva/view/ListIcon'
import MoreIcon from './konva/view/MoreIcon'
import { Lines } from '../../../../models'
import { Button, Tooltip } from "@mui/material"
import { t } from "i18next"
import Konva from './konva'

// Icons
import Gallery from "../../../../assets/icons/Gallery"
import Info from '../../../../assets/icons/Info'

interface IProps {
  urlUploaded: string,
  isOpen: boolean,
  lines: Lines[],
  setLines: Dispatch<SetStateAction<Lines[]>>,
  setUrlUploaded: Dispatch<SetStateAction<string>>
  setLocalBlob: Dispatch<SetStateAction<File | null | undefined>>
}

function UploadImage({ setLocalBlob, lines, setLines, isOpen, urlUploaded, setUrlUploaded }: IProps) {

  const [color, setColor] = useState('0F172A')
  const [slider, setSlider] = useState<number>(12)
  const [typeRect, setTypeRect] = useState<string>('MouseDraw')
  const [type, setType] = useState<string>('MouseDraw')

  const changeSlider = (event: Event, newValue: number | number[]) =>
    typeof newValue === 'number' && setSlider(newValue);

  const readDataURL = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    if (event && event.currentTarget && event.currentTarget.files) {
      setLocalBlob(event.currentTarget.files[0])

      reader.onload = () => typeof reader.result === 'string' && setUrlUploaded(reader.result)

      reader.readAsDataURL(event.currentTarget.files[0]);
    }
  }


  return (
    <div className="w-1/2 mb-auto">
      <div className='flex items-center justify-start gap-1.5 mb-1.5'>
        <Title>{t('your_image')}</Title>
        <Info infoText={t('upload_info')} />
      </div>
      {urlUploaded ? (
        <div className='w-full rounded-md overflow-hidden relative'>
          <Konva
            type={type}
            lines={lines}
            setLines={setLines}
            color={color}
            slider={slider}
            isOpen={isOpen}
            typeRect={typeRect}
            urlUploaded={urlUploaded}
            setUrlUploaded={setUrlUploaded}
          />
          <ListIcon
            type={type}
            color={color}
            slider={slider}
            setType={setType}
            typeRect={typeRect}
            setColor={setColor}
            setTypeRect={setTypeRect}
            changeSlider={changeSlider}
          />
          <MoreIcon
            setUrlUploaded={setUrlUploaded}
            setLocalBlob={setLocalBlob}
            setLines={setLines}
          />
        </div>
      ) : (
        <div
          className="relative w-full h-96 bg-dark-200 border border-dashed 
        border-border rounded-md flex justify-center items-center flex-col py-6 bg-primary"
        >
          <input
            accept="image/png, image/jpeg"
            onChange={(event) => readDataURL(event)}
            type="file"
            className='absolute w-full h-full opacity-0 cursor-pointer z-10'
          />
          <Gallery />
          <Title className='!mt-4 !mb-6'>{t('drag_drop_text')}</Title>
          <Button className='!rounded-md !border-border !text-active' variant='outlined' color='secondary'>
            {t('browse')}
          </Button>
        </div>
      )}
    </div>
  )
}

export default UploadImage