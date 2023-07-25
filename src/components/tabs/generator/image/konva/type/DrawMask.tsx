import { useRef, useState, Dispatch, SetStateAction } from 'react'
import { Layer, Image, Line } from 'react-konva'

interface IProps {
  lines: Lines[],
  image: HTMLImageElement | undefined,
  isOpen: boolean,
  height?: number,
  slider: number,
  width?: number,
  stageRef: any,
  color: string,
  type: string,
  setLines: Dispatch<SetStateAction<Lines[]>>
}

interface Lines {
  color?: any
  strokeWidth?: number | undefined
  points: number[]
}

const DrawMask = ({ lines, setLines, color, slider, width, height, type, image }: IProps) => {

  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    if (type === 'MouseDraw' && width && height) {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      const result = [...lines, { points: [pos.x, pos.y], strokeWidth: slider, color: color }]
      setLines(result);
      lines && setLines(result)
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
        lastLine.points = lastLine.points.concat([point.x, point.y]);
      }
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
      lines && setLines(lines.concat())
    }
  };

  const handleMouseUp = () => {
    if (type === 'MouseDraw') {
      document.body.style.overflowY = "auto";
      isDrawing.current = false;
    }
  };

  const removeLine = (e: any) => {
    const clickedLineIndex = e.target.index;
    setLines((lines) =>
      lines.filter((line, index) => index !== clickedLineIndex - 1)
    );
  }

  return (
    <Layer
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Image width={width} height={height} alt='img' image={image} />
      {lines.map((line, i) => !!line && (
        <Line
          onClick={event => type === 'Eraser' && removeLine(event)}
          strokeWidth={line.strokeWidth}
          stroke={`#${color}`}
          points={line.points}
          lineCap="round"
          tension={0.5}
          key={i}
        />
      ))}
    </Layer>
  )
}

export default DrawMask