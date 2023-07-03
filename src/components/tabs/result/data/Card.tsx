import { useState } from "react";
import { t } from "i18next"
import { Detail, Label } from "../../../../mui/customize";
import { Models, ResultImg } from "../../../../models";
import DetailCard from "./modal/DetailCard";

function Card(props: any) {

    const { result_images, status, defect_model_id, models, defect_type: { name: defectName } } = props
    const [open, setOpen] = useState<boolean>(false);

    return (
        <li className='p-2 flex flex-col justify-between rounded-md bg-primary'>
            <div>
                <div className="flex items-center justify-between">
                    <Label>{defectName}</Label>
                    {!!status && (
                        <p
                            className={
                                `py-0.5 px-2 rounded-[5px] ${status === 'p' ? 'bg-[#D7DDE4] text-[#6B7280]' : status === 'g' ?
                                    'bg-[#FCF3D3] text-[#DC7700]' : status === 'f' && 'bg-[#D3FCDF] text-[#49716A]'}`
                            }
                        >{
                                status === 'p' ?
                                    'Pending...' : status === 'g' ?
                                        'generating...' : status === 'f' &&
                                        'generated'
                            }</p>
                    )}
                </div>
                <ul className="p-1 h-12 mt-4 gap-1 rounded flex items-center justify-start">
                    {!!result_images.length &&
                        result_images.slice(0, result_images.length > 4 ? 3 : 4).map((item: ResultImg, idx: number) =>
                            <li key={idx} className="w-1/4 h-full">
                                <img
                                    onClick={() => setOpen(true)}
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
                    <Detail className="!bg-active !text-active !px-1 rounded-md">{
                        models.length && models.find((model: Models) => model.id === defect_model_id) &&
                        models.find((model: Models) => model.id === defect_model_id).name
                    }</Detail>
                </div>
                <div className='w-full mt-2 rounded px-3 py-1.5 flex justify-between' >
                    <Detail>{t('defect_type')}:</Detail>
                    <Detail className="!bg-active !text-active !px-1 rounded-md text-right">{defectName}</Detail>
                </div>
            </div>
            <DetailCard
                open={open}
                setOpen={setOpen}
                models={models}
                data={props}
            />
        </li>
    )
}

export default Card