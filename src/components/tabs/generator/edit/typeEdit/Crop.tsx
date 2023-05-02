import { Dispatch, SetStateAction, useRef } from 'react'
import Cropper, { ReactCropperElement } from "react-cropper";
import { Button } from '@mui/material'

interface IProps {
  urlUploaded: string,
  setUrlUploaded: Dispatch<SetStateAction<string>>
}

const Crop = ({ urlUploaded, setUrlUploaded }: IProps) => {

  const cropperRef = useRef<ReactCropperElement>();

  const cropImage = () =>
    setUrlUploaded(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

  return (
    <>
      <Button
        className='!absolute !bottom-4 !right-4 !z-20'
        onClick={cropImage}
        color='success'
        variant='contained'
      >Crop</Button>
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: "100%" }}
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
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        guides={true}
      />
    </>
  )
}

export default Crop