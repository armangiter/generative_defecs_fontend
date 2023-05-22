import { useState } from 'react'
import { Image, Layer } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { Annotations } from '../../../../../models'
import { v4 } from 'uuid';
import RectAngle from '../RectAngle';

interface IProps {
  urlUploaded: string,
  color: string,
  width?: number,
  height?: number,
  type: string,
  typeRect: string,
  image: HTMLImageElement | undefined
}

const DrawLabel = ({ color, width, height, urlUploaded, type, typeRect, image }: IProps) => {

  const [rects, setRects] = useState<Annotations>();
  const [uniqueID, setUniqueID] = useState<string>(v4())
  const [newAnnotation, setNewAnnotation] = useState<Annotations>({})
  const [selectShape, setSelectShape] = useState<string>('');
  const [isTransforming, setIsTransforming] = useState<boolean>(false)

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

  return (
    <Layer
      onMouseDown={handleMouseDown}
      onMouseMove={(event) => type === 'MouseCircle' || type === 'MouseSquare' || type === 'Crop' ? handleMouseMove(event) : undefined}
      onMouseUp={(event) => type === 'MouseCircle' || type === 'MouseSquare' || type === 'Crop' ? handleMouseUp(event) : undefined}
    >
      <Image width={width} height={height} alt='img' image={image} />
      <RectAngle
        type={type}
        rects={rects}
        color={color}
        typeRect={typeRect}
        setRects={setRects}
        selectShape={selectShape}
        setIsTransforming={setIsTransforming}
        setSelectShape={setSelectShape}
      />
    </Layer>
  )
}

export default DrawLabel