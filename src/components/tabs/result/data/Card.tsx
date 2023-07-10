import { t } from "i18next"
import { Detail, Label } from "../../../../mui/customize";
import { ResultImg } from "../../../../models";
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

function Card(props: any) {

    const navigate = useNavigate()
    const { result_images, id, status, created, defect_model: { name }, models, defect_type: { name: defectName } } = props

    return (
        <li className='p-2 flex flex-col justify-between rounded-md bg-primary'>
            <div>
                <div className="flex items-center justify-between">
                    <Label>{defectName}</Label>
                    {!!status && (
                        <p
                            className='text-xs font-normal text-light-100'
                        >{created.split("T")[0]} {created.split("T")[1].split(".")[0]}</p>
                    )}
                </div>
                <ul className="p-1 h-12 mt-4 gap-1 rounded flex items-center justify-start">
                    {!!result_images.length &&
                        result_images.slice(0, result_images.length > 4 ? 3 : 4).map((item: ResultImg, idx: number) =>
                            <li key={idx} className="w-1/4 h-full">
                                <img
                                    src={item.file}
                                    alt='result'
                                    className="w-full h-full object-cover rounded cursor-pointer"
                                />
                            </li>
                        )}
                    {result_images.length > 4 && (
                        <li
                            className="w-1/4 h-10 bg-primary rounded flex justify-center items-center cursor-pointer"
                        >
                            <Label
                                className="text-inactive border border-border h-full w-full flex justify-center items-center rounded"
                            >+{result_images.length && result_images.length - 3}</Label>
                        </li>
                    )}
                </ul >
                <div className='w-full mt-2 rounded px-3 py-1.5 flex justify-between'>
                    <Detail>{t('part')}:</Detail>
                    <Detail className="!bg-active !text-active !px-1 rounded-md">{name}</Detail>
                </div>
                <div className='w-full mt-2 rounded px-3 py-1.5 flex justify-between' >
                    <Detail>{t('defect_type')}:</Detail>
                    <Detail className="!bg-active !text-active !px-1 rounded-md text-right">{defectName}</Detail>
                </div>
            </div>
            <Button
                className='!text-sm !border !border-solid !border-border !rounded-md !mt-auto'
                fullWidth
                onClick={() => navigate(`/results/detail/${id}`)}
            >
                {t('view_result')}
            </Button>
        </li>
    )
}

export default Card