import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react'
import { Stage, Layer, Image } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node';
import Cropper, { ReactCropperElement } from "react-cropper";
import { v4 } from 'uuid';
import { Button } from '@mui/material'
import DrawLabel from './DrawLabel';
import "cropperjs/dist/cropper.css";
import { Annotations } from '../../../../models';

interface IProp {
  urlUploaded: string,
  type: string,
  typeRect: string,
  setUrlUploaded: Dispatch<SetStateAction<string>>
}

const ImageEdit = ({ urlUploaded, setUrlUploaded, type, typeRect }: IProp) => {

  const cropperRef = useRef<ReactCropperElement>();
  const contentImg = useRef<HTMLDivElement>(null);
  const [cropData, setCropData] = useState<string>("#");
  const [image, setImage] = useState<HTMLImageElement>()
  const [rects, setRects] = useState<Annotations>();
  const [uniqueID, setUniqueID] = useState<string>(v4())
  const [newAnnotation, setNewAnnotation] = useState<Annotations>({})
  const [test, setTest] = useState('')
  const [selectShape, setSelectShape] = useState<string>('');
  const [isTransforming, setIsTransforming] = useState<boolean>(false)

  useEffect(() => {
    const img: HTMLImageElement = new window.Image()
    img.crossOrigin = ''
    img.src = urlUploaded
    setImage(img)
    let canvas: HTMLCanvasElement = document.createElement('canvas')
    let ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')

    if (ctx && contentImg.current) {

      ctx?.drawImage(img, 0, 0, 500, 380, 0, 0, 500, 300)

      const url = canvas.toDataURL()
      setTest(url)
    }
  }, [urlUploaded])
  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (!isTransforming) {
      if (type === 'Eraser' && rects && event.target.attrs.name) {
        const filteredRects = Object.fromEntries(
          Object.entries(rects).filter(([key, value]) => value.name !== event.target.attrs.name)
        );
        Object.values(filteredRects).length ? setRects(filteredRects) : setRects()

      } else {
        const pointerPos = event.target.getStage()?.getPointerPosition();
        if (pointerPos) {
          const { x, y } = pointerPos
          if (
            !rects || !Object.values(rects).find(item =>
              item.xDestination - 10 < x && x < (item.xDestination - 10 + Math.abs(item.width)) &&
              item.yDestination - 10 < y && y < (item.yDestination - 10 + Math.abs(item.height))
            )
          ) {
            const firstAnnotation: Annotations = {}
            firstAnnotation[uniqueID] = {
              x,
              y,
              width: 0,
              height: 0,
              xDestination: x,
              yDestination: y,
              type: typeRect,
              name: uniqueID,
            }
            setNewAnnotation(firstAnnotation)
          }
        }
      }
    }
  }
  const handleMouseMove = (event: KonvaEventObject<MouseEvent>) => {
    if (Object.values(newAnnotation).length && !isTransforming) {
      const pointerPos = event.target.getStage()?.getPointerPosition();
      const sx: number | undefined = newAnnotation[uniqueID].x;
      const sy: number | undefined = newAnnotation[uniqueID].y;

      if (pointerPos && sx && sy) {
        const { x, y } = pointerPos

        const firstAnnotation: Annotations = {}
        firstAnnotation[uniqueID] = {
          x: sx,
          y: sy,
          width: typeRect === 'MouseSquare' || typeRect === 'Crop' ? x - sx : Math.abs(x - sx),
          height: typeRect === 'MouseSquare' || typeRect === 'Crop' ? y - sy : Math.abs(y - sy),
          xDestination: (x - sx) < 0 ? sx + (x - sx) : sx,
          yDestination: (y - sy) < 0 ? sy + (y - sy) : sy,
          type: typeRect,
          name: uniqueID,
        }
        setNewAnnotation(firstAnnotation);
        setRects({ ...rects, ...firstAnnotation })
      }
    }
  };
  const handleMouseUp = (event: KonvaEventObject<MouseEvent>) => {
    if (Object.values(newAnnotation).length) {
      const pointerPos = event.target.getStage()?.getPointerPosition();
      const sx: number | undefined = newAnnotation[uniqueID].x;
      const sy: number | undefined = newAnnotation[uniqueID].y;

      if (typeRect === 'Crop' && image && pointerPos) {
      } else {
        if (pointerPos && sx && sy) {
          const { x, y } = pointerPos
          const newAnnotationToAdd: Annotations = {};
          newAnnotationToAdd[uniqueID] = {
            x: sx,
            y: sy,
            width: x - sx,
            height: y - sy,
            xDestination: x - sx < 0 ? sx + (x - sx) : sx,
            yDestination: y - sy < 0 ? sy + (y - sy) : sy,
            type: typeRect,
            name: uniqueID,
          }
          setRects({ ...rects, ...newAnnotation })
          setNewAnnotation({});
          setUniqueID(v4())
        }
      }
    }
  };
  const cropImage = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setUrlUploaded(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  }

  return (
    <div className='w-full h-full relative' ref={contentImg}>
      {/* <img src={test} className='absolute w-full z-10 left-0 top-0 h-fit' /> */}
      {
        typeRect === 'Crop' &&
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
            zoomTo={2.5}
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
      }
      <Stage
        width={contentImg.current?.clientWidth}
        height={contentImg.current?.clientHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={(event) => type === 'MouseCircle' || type === 'MouseSquare' || type === 'Crop' ? handleMouseMove(event) : undefined}
        onMouseUp={(event) => type === 'MouseCircle' || type === 'MouseSquare' || type === 'Crop' ? handleMouseUp(event) : undefined}
      >
        <Layer>
          <Image width={contentImg.current?.clientWidth} height={contentImg.current?.clientHeight} image={image} alt='img' />
          <DrawLabel
            rects={rects}
            typeRect={typeRect}
            type={type}
            setRects={setRects}
            setIsTransforming={setIsTransforming}
            selectShape={selectShape}
            setSelectShape={setSelectShape}
          />
        </Layer>
      </Stage>
      {/* <img
        className='w-full h-full object-cover'
        src={urlUploaded}
      /> */}
    </div>
  )
}

export default ImageEdit