import { useEffect, useRef } from 'react'
import { t } from "i18next"
import { Head } from "../../../mui/customize"
import { Data, Lines, Point } from "../../../models"
import { request } from '../../../services/api'

// Components
import UploadImage from "./image/UploadImage"
import Field from "./data"
import { useState } from "react"
import Konva from 'konva'
import { useNavigate } from 'react-router-dom'

interface IProps {
  isOpen: boolean,
}

function Generator({ isOpen }: IProps) {

  const navigate = useNavigate()

  const generate = useRef<HTMLDivElement>()
  const [urlUploaded, setUrlUploaded] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingD, setIsLoadingD] = useState<boolean>(true)
  const [localBlob, setLocalBlob] = useState<File | null>()
  const [lines, setLines] = useState<Lines[]>([]);

  const [data, setData] = useState<Data>({
    models: {
      list: [],
    },
    defects: {
      list: [],
    },
    numImg: 1
  })

  const updateDefects = (id: number) => {
    setIsLoadingD(true)
    request.listDefectModels(id)
      .then(res => {
        const listDefect = res.data
        setIsLoadingD(false)
        setData(prev => {
          return {
            ...prev,
            defects: {
              list: listDefect || [],
              value: !!listDefect.length && listDefect[0].id,
            }
          }
        })
      })
  }

  useEffect(() => {
    setIsLoadingD(true)
    request.getModels()
      .then(response => {
        const listModel = response.data
        if (listModel.length) {
          setData({
            ...data,
            models: {
              list: listModel || [],
              value: !!listModel.length && listModel[0].id
            }
          })
          updateDefects(listModel[0].id)
        } else {
          setData({
            ...data,
            models: {
              list: listModel || [],
              value: !!listModel.length && listModel[0].id
            },
            defects: {
              ...data.defects,
            }
          })
        }
      })
  }, [])

  const sendMask = (maskFile: File, inRedirect: boolean) => {
    setIsLoading(true)
    const { defects: { value: defectValue }, models: { value: modelValue }, numImg } = data

    const formData: FormData | null = new FormData()
    if (localBlob) {
      formData.append('image_file', localBlob)
      formData.append('mask_file', maskFile)
      formData.append('defect_type_id', JSON.stringify(defectValue))
      formData.append('defect_model_id', JSON.stringify(modelValue))
      typeof numImg === 'string' ?
        formData.append('number_of_images', numImg) :
        formData.append('number_of_images', JSON.stringify(numImg))
      formData.append('mask_mode', 'random')
    }

    if (formData)
      request.sendGenerate(formData)
        .then(() => {
          setLines([])
          setUrlUploaded('')
          setLocalBlob(null)
          setIsLoading(false)
          inRedirect && navigate('/results')
        })
    else
      setIsLoading(false)
  }

  const createMask = async (inRedirect: boolean) => {

    if (localBlob) {
      setIsLoading(true)
      const points: Point[] = []
      lines.map((item: Lines) =>
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
          points: item.points,
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

        sendMask(file, inRedirect)
      }
    }
  }

  return (
    <div>
      <Head>{t('generate_new_image')}</Head>
      <div ref={generate} className="flex items-center justify-center gap-8">
        <UploadImage
          urlUploaded={urlUploaded}
          setUrlUploaded={setUrlUploaded}
          lines={lines}
          setLines={setLines}
          isOpen={isOpen}
          setLocalBlob={setLocalBlob}
        />
        <Field
          isLoading={isLoading}
          createMask={createMask}
          data={data}
          setData={setData}
          updateDefects={updateDefects}
          isLoadingD={isLoadingD}
          setIsLoadingD={setIsLoadingD}
          urlUploaded={urlUploaded}
        />
      </div>
    </div>
  )
}

export default Generator