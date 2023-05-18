import { useRef, useState } from 'react'
import { Layer, Image, Line } from 'react-konva'

interface IProps {
  image: HTMLImageElement | undefined,
  type: string
  height?: number,
  width?: number,
  stageRef: any,
}

interface Lines {
  points: number[]
}

const DrawMask = ({ width, height, type, image, stageRef }: IProps) => {

  const [lines, setLines] = useState<Lines[]>([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    if (type === 'MouseDraw') {
      document.body.style.overflowY = "hidden";
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { points: [pos.x, pos.y] }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (type === 'MouseDraw') {
      if (!isDrawing.current) {
        return;
      }
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      let lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);
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
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          stroke="white"
          strokeWidth={12}
          onClick={event => type === 'Eraser' && removeLine(event)}
          tension={0.5}
          lineCap="round"
        />
      ))}
    </Layer>
  )
}

export default DrawMask