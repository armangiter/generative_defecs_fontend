import { useRef, useState, useEffect } from 'react'
import { Layer, Image, Line } from 'react-konva'

interface IProps {
  image: HTMLImageElement | undefined,
  slider: number,
  height?: number,
  width?: number,
  type: string,
  stageRef: any,
  color: string,
  isFullScreen: boolean
}

interface Lines {
  points: number[],
  strokeWidth: number,
  color: string
}

const DrawMask = ({ color, slider, width, height, type, image, stageRef, isFullScreen }: IProps) => {

  const [lines, setLines] = useState<Lines[]>([]);
  const [percentLines, setPercentLines] = useState<Lines[]>([])

  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    if (type === 'MouseDraw' && width && height) {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { points: [pos.x, pos.y], strokeWidth: slider, color: color }]);
      // setPercentLines([...lines, { points: [pos.x / width, pos.y / height] }]);
    }
  };
  console.log(lines);


  const handleMouseMove = (e: any) => {
    if (type === 'MouseDraw') {
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
      // setPercentLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    if (type === 'MouseDraw') {
      document.body.style.overflowY = "auto";
      isDrawing.current = false;
    }
  };

  const handleDownload = () => {
    let newStage = stageRef.current
    const stage = newStage.getStage();
    const layer = newStage.getLayers()[0];

    // Add a rectangle shape as the background
    const background = new window.Konva.Rect({
      x: 0,
      y: 0,
      width: stage.width(),
      height: stage.height(),
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: stage.width(), y: stage.height() },
      fillLinearGradientColorStops: [
        0,
        'black',
        1,
        'black',
      ],
      listening: false,
    });
    const listLine: any = []

    lines.map(item => listLine.push(new window.Konva.Line({
      points: item.points,
      stroke: '#fff',
      strokeWidth: 12,
      tension: 0.5,
      lineCap: "round"
    })))
    layer.add(background);

    listLine.map((item: any) => layer.add(item))

    layer.draw();

    // Generate data URL for background

    const dataURL = newStage.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeLine = (e) => {
    const clickedLineIndex = e.target.index;
    setLines((prevLines) =>
      prevLines.filter((line, index) => index !== clickedLineIndex - 1)
    );
    setPercentLines((prevLines) =>
      prevLines.filter((line, index) => index !== clickedLineIndex - 1)
    );
  }

  useEffect(() => {
    if (width && height) {
      const responsiveLine = lines.map((line: Lines) => {
        return {
          color: line.color,
          strokeWidth: line.strokeWidth,
          points: line.points.map((point: number, idx: number) =>
            idx % 2 === 0 ? point / width : point / height
          )
        }
      })
      setPercentLines(responsiveLine);
    }
  }, [lines])

  const responsiveLine = percentLines.map((line: Lines) => {
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
      <Image width={width} height={height} alt='img' image={image} />
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