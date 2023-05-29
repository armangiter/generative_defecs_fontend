import { useRef, useState, useEffect } from 'react'
import { Layer, Image, Line } from 'react-konva'
import { Size, Url } from '../../../../models'

interface IProps {
  data: Url,
  sizeImage: Size | undefined,
  image: HTMLImageElement | undefined,
  slider: number,
  height?: number,
  width?: number,
  type: string,
  color: string,
}

interface Lines {
  points: number[],
  strokeWidth: number,
  color: string
}

const DrawMask = ({ sizeImage, data, color, slider, width, height, type, image }: IProps) => {

  const [lines, setLines] = useState<Lines[]>([]);

  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    if (type === 'MouseDraw' && width && height) {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { points: [pos.x / width, pos.y / height], strokeWidth: slider, color: color }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (type === 'MouseDraw' && width && height) {
      if (!isDrawing.current) {
        return;
      }
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      let lastLine = lines[lines.length - 1];
      if (lastLine && lastLine.points) {
        lastLine.points = lastLine.points.concat([point.x / width, point.y / height]);
      }
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    if (type === 'MouseDraw') {
      document.body.style.overflowY = "auto";
      isDrawing.current = false;
    }
  };

  const removeLine = (e) => {
    const clickedLineIndex = e.target.index;
    setLines((prevLines) =>
      prevLines.filter((line, index) => index !== clickedLineIndex - 1)
    );
  }

  const responsiveLine = lines.map((line: Lines) => {
    if (width && height) {
      return {
        color: line.color,
        strokeWidth: line.strokeWidth,
        points: line.points.map((point: number, idx: number) =>
          idx % 2 === 0 ? width * point : height * point
        )
      }
    }
  })


  return (
    <Layer
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      {sizeImage && width ? (
        <Image width={width} height={(width / sizeImage.width) * sizeImage.height} alt='img' image={image} />
      ) : <></>}
      {responsiveLine.map((line, i) => !!line && (
        <Line
          key={i}
          points={line.points}
          stroke={`#${line.color}`}
          strokeWidth={line.strokeWidth}
          onClick={event => type === 'Eraser' && removeLine(event)}
          tension={0.5}
          lineCap="round"
        />
      ))}
    </Layer>
  )
}

export default DrawMask