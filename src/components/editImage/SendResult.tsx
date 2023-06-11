import { RefObject } from 'react'
import { LoadingButton } from '@mui/lab'
import { t } from 'i18next'
import Konva from 'konva'
import { Stage } from 'konva/lib/Stage'
import { Point, ResponseImg } from '../../models'

interface IProps {
    width: number | undefined,
    height: number,
    isLoading: boolean,
    sendMask: ((maskFile: FormDataEntryValue | null) => void) | ((maskFile: FormDataEntryValue | null, typeEdit: string, data: ResponseImg) => void),
    stageRef: RefObject<Stage>,
}

const SendResult = ({ width, height, stageRef, isLoading, sendMask }: IProps) => {

    const uploadFile = async () => {
        // get data Line
        const children: any = stageRef &&
            stageRef.current?.getChildren()[0].children?.filter(item =>
                item.attrs.points
            );

        const points: Point[] = []
        children.map((item: Konva.Line) =>
            item.attrs.points && points.push({
                strokeWidth: item.attrs.strokeWidth,
                points: item.attrs.points,
            })
        );

        // Stage
        const div = document.createElement('div')
        div.classList.add('drawMask');
        const stage = new Konva.Stage({
            container: div,
            width,
            height,
        });

        // Layer
        const layer = new Konva.Layer();
        stage.add(layer);

        // Bg Black
        const fullRect = new Konva.Rect({
            width,
            height,
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

        const formData = new FormData();
        formData.append('mask_file', file)

        return formData.get('mask_file')
    }

    return (
        <LoadingButton
            color='success'
            variant='contained'
            loading={isLoading}
            onClick={async () => {
                const maskFile: FormDataEntryValue | null = await uploadFile()
                sendMask(maskFile)

            }}
            className='!absolute right-6 bottom-6'
        >{t('upload')}</LoadingButton>
    )
}

export default SendResult