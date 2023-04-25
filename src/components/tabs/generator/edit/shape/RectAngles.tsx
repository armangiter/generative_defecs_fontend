import { Fragment, Dispatch, SetStateAction, useEffect, useRef, MutableRefObject } from 'react'
import { Circle, Rect, Transformer } from 'react-konva';
import { Annotation } from '../../../../../models';

interface IProps {
  shapeProps: Annotation,
  typeRect: string,
  type: string,
  isSelected: boolean,
  setIsTransforming: Dispatch<SetStateAction<boolean>>,
  onSelect: () => void,
  onChange: (prop: any) => void,
}

const RectAngles = ({ shapeProps, type, isSelected, setIsTransforming, typeRect, onSelect, onChange }: IProps) => {

  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  const transformEnd = (e: any) => {
    setIsTransforming(false)
    const node: any = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleY(1);
    node.scaleX(1);
    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      xDestination: e.target.attrs.width < 0 ? e.target.attrs.x + e.target.attrs.width : e.target.attrs.x,
      yDestination: e.target.attrs.height < 0 ? e.target.attrs.y + e.target.attrs.height : e.target.attrs.y,
      width: Math.max(node.width() * scaleX),
      height: Math.max(node.height() * scaleY)
    });
  }

  useEffect(() => {
    if (isSelected && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      {
        typeRect === 'MouseCircle' && type !== 'Edit' ?
          <Circle
            {...shapeProps}
            // onClick={onSelect}
            stroke='red'
            draggable
            onTransformEnd={e => transformEnd(e)}
          /> :
          <Rect
            {...shapeProps}
            onClick={onSelect}
            ref={shapeRef}
            onDragEnd={(e) => {
              onChange({
                ...shapeProps,
                x: e.target.x(),
                y: e.target.y(),
                xDestination: e.target.attrs.width < 0 ? e.target.attrs.x + e.target.attrs.width : e.target.attrs.x,
                yDestination: e.target.attrs.height < 0 ? e.target.attrs.y + e.target.attrs.height : e.target.attrs.y,
              });
            }}
            stroke='red'
            draggable
            onTransformStart={() => setIsTransforming(true)}
            onTransformEnd={e => transformEnd(e)}
          />
      }
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  )
}

export default RectAngles