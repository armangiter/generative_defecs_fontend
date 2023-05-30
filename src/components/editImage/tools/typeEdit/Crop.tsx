import { Dispatch, SetStateAction, useRef } from 'react'
import Cropper, { ReactCropperElement } from "react-cropper";
import { Button } from '@mui/material'
import i18next from 'i18next';

interface IProps {
  width: number | undefined,
  height: number | undefined,
  urlUploaded: string | undefined,
  setUrlUploaded: Dispatch<SetStateAction<string>>
}

const Crop = ({ height, width, urlUploaded, setUrlUploaded }: IProps) => {

  const { t } = i18next;
  const cropperRef = useRef<ReactCropperElement | undefined | string>();

  const cropImage = () =>
    setUrlUploaded(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

  return (
    <>
      <Button
        className='!absolute !bottom-4 !right-4 !z-20'
        onClick={cropImage}
        color='success'
        variant='contained'
      >{t('crop')}</Button>
      <Cropper
        ref={cropperRef}
        style={{ height: height, width: "100%" }}
        zoomTo={0}
        initialAspectRatio={1}
        preview=".img-preview"
        src={urlUploaded}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
      />
    </>
  )
}

export default Crop