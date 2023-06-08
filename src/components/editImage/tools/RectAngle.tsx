import { Dispatch, SetStateAction } from 'react'
import { Annotations } from '../../../models';
import RectAngles from './shape/RectAngles';

interface IProps {
  type: string,
  color: string,
  typeRect: string,
  rects?: Annotations,
  selectShape: string,
  setRects: Dispatch<SetStateAction<Annotations | undefined>>,
  setSelectShape: Dispatch<SetStateAction<string>>,
  setIsTransforming: Dispatch<SetStateAction<boolean>>
}

const RectAngle = ({ color, rects, type, typeRect, setIsTransforming, selectShape, setSelectShape, setRects }: IProps) => {
  return (
    <>
      {
        rects && Object.values(rects).length && Object.values(rects).filter(item =>
          typeRect === 'Crop' ? item.type === 'Crop' : item
        ).map(rect =>
          <RectAngles
            key={rect.name}
            color={color}
            typeRect={typeRect}
            setIsTransforming={setIsTransforming}
            onSelect={() => setSelectShape(rect.name)}
            isSelected={type === 'Edit' ? rect.name === selectShape : false}
            shapeProps={{ ...rect }}
            onChange={(newAttrs) => {
              const newObj = Object.entries(rects).reduce((acc: any, [key, value]) => {
                if (value.name === newAttrs.name) {
                  acc[key] = newAttrs;
                } else {
                  acc[key] = value;
                }
                return acc;
              }, {});

              setRects(newObj);
            }}
          // type={''}
          />
        )
      }
    </>
  )
}

export default RectAngle