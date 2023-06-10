import { RefObject } from 'react'
import { Button } from '@mui/material';
import { t } from 'i18next';
import { Stage } from 'konva/lib/Stage';
import Konva from 'konva';
import { LoadingButton } from '@mui/lab';
import { Point, ResponseImg, Url } from '../../../models';

interface IProps {
    data?: Url | ResponseImg | undefined,
    width: number | undefined,
    height: number,
    stageRef: RefObject<Stage>,
    isLoading: boolean,
    sendMask: ((maskFile: FormDataEntryValue | null) => void) | ((maskFile: FormDataEntryValue | null, typeEdit: string, data: ResponseImg) => void),
    closeModal: () => void
}

const BtnModal = ({ data, width, height, isLoading, sendMask, stageRef, closeModal }: IProps) => {

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

        // Line
        const listLine: any = []
        points.map((item: Point) => listLine.push(new Konva.Line({
            points: item.points,
            stroke: 'black',
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
        <div className='flex items-center justify-end gap-4 mt-8'>
            <Button
                color='secondary'
                variant='outlined'
                onClick={closeModal}
            >{t('discard')}</Button>
            <LoadingButton
                color='inherit'
                variant='contained'
                loading={isLoading}
                onClick={async () => {
                    const maskFile: FormDataEntryValue | null = await uploadFile()
                    await sendMask(maskFile, 'fromModal', data)
                    closeModal()
                }}
            >{t('save_change')}</LoadingButton>
        </div>
    )
}

export default BtnModal