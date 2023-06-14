import { useState, useRef, useEffect } from "react";
import UploadImage from "./UploadImage"
import DefectType from "./DefectType"
import i18next from 'i18next';
import { DefectType as Defect, Lines, Models, Point } from "../../../models";
import Konva from "konva";
import { request } from "../../../services/api";
import { toast } from "react-toastify";

interface IProps {
  listDefect: Defect[] | undefined
}

const Generator = ({ listDefect }: IProps) => {

  const { t } = i18next;
  const [open, setOpen] = useState(false);
  const generate = useRef<HTMLDivElement>()
  const [defect, setDefect] = useState<number>()
  const [model, setModel] = useState<number>()
  const [numberMask, setNumberMask] = useState<number>(5)
  const [prevLines, setPrevLines] = useState<Lines[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [localBlob, setLocalBlob] = useState<File | null>()
  const [listModels, setListModels] = useState<Models[]>([]);
  const [urlUploaded, setUrlUploaded] = useState<string>();

  const sendMask = (maskFile: File) => {
    setIsLoading(true)

    const formData: FormData | null = new FormData()
    if (localBlob && defect) {
      formData.append('image_file', localBlob)
      formData.append('mask_file', maskFile)
      formData.append('defect_type_id', JSON.stringify(defect))
      formData.append('defect_model_id', JSON.stringify(model))
      formData.append('number_of_images', JSON.stringify(numberMask))
      formData.append('mask_mode', 'random')
    }

    if (formData)
      request.sendGenerate(formData)
        .then(() => {
          setPrevLines([])
          setUrlUploaded('')
          setLocalBlob(null)
          setIsLoading(false)
          setOpen(true)
          const interval = setInterval(() => {
            request.statusGenerate()
              .then(res => {
                if (res.data.status !== 'generating') {
                  setOpen(false)
                  clearInterval(interval)
                  toast.success(t('over_generate_progress'), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
                } else
                  setOpen(true);
              })
          }, 5000)
        })
    else
      setIsLoading(false)
  }

  const createMask = async () => {
    if (localBlob) {
      setIsLoading(true)
      const points: Point[] = []
      prevLines.map((item: Lines) =>
        item.points && points.push({
          strokeWidth: item.strokeWidth,
          points: item.points,
        })
      );

      // Stage
      const div = document.createElement('div')
      div.classList.add('drawMask');
      if (generate && generate.current) {
        const { current: { children } } = generate;
        const { clientWidth, clientHeight } = children[0]

        const stage = new Konva.Stage({
          container: div,
          width: clientWidth,
          height: clientHeight,
        });

        // Layer
        const layer = new Konva.Layer();
        stage.add(layer);

        // Bg Black
        const fullRect = new Konva.Rect({
          width: clientWidth,
          height: clientHeight,
          fill: 'black'
        })

        layer.add(fullRect)

        // Line
        const listLine: any = []
        points.map((item: Point) => listLine.push(new Konva.Line({
          points: item.points.map((item, idx) => idx % 2 === 0 ? item * clientWidth : item * clientHeight),
          stroke: 'white',
          strokeWidth: item.strokeWidth,
          tension: 0.5,
          lineCap: "round"
        })))


        // Add Line
        listLine.map((item: any) => layer.add(item))

        layer.draw();

        // convert stage to file
        const dataUrl = stage.toDataURL();

        const response = await fetch(dataUrl);

        const blob = await response.blob();
        const file = new File([blob], 'mask_file', { type: blob.type });

        sendMask(file)
      }
    }
  }

  useEffect(() => {
    request.getModels()
      .then(res => {
        const { data } = res
        if (data.length) {
          setModel(data[0].id)
          setListModels(data)
        }
      })
  }, [])

  return (
    <div>
      <p className='text-light-100 font-extrabold	text-2xl'>{t('generate_new_images')}</p>
      <div ref={generate} className='flex flex-col md:flex-row items-start justify-center gap-8 mt-12'>
        <UploadImage
          isLoading={isLoading}
          localBlob={localBlob}
          prevLines={prevLines}
          urlUploaded={urlUploaded}
          setIsLoading={setIsLoading}
          setPrevLines={setPrevLines}
          setLocalBlob={setLocalBlob}
          setUrlUploaded={setUrlUploaded}
        />
        <DefectType
          defect={defect}
          isLoading={isLoading}
          model={model}
          numberMask={numberMask}
          setDefect={setDefect}
          listDefect={listDefect}
          sendMask={createMask}
          listModels={listModels}
          setModel={setModel}
          setNumberMask={setNumberMask}
          localBlob={localBlob}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  )
}

export default Generator