import { useState } from "react";
import { t } from "i18next"
import { Detail, Label } from "../../../../mui/customize";
import DetailCard from "./modal/DetailCard";

function Card(props: any) {

    const { title, images, part, defect } = props
    const [open, setOpen] = useState<boolean>(false);

    return (
        <li className='p-2 rounded-md bg-primary'>
            <Label>{title}</Label>
            <ul className="p-1 h-12 mt-4 gap-1 rounded flex items-center justify-start">
                {images.slice(0, images.length > 4 ? 3 : 4).map((item: any, idx: number) =>
                    <li key={idx} className="w-1/4 h-full">
                        <img
                            onClick={() => setOpen(true)}
                            src={item}
                            alt='result'
                            className="w-full h-full object-cover rounded cursor-pointer"
                        />
                    </li>
                )}
                <DetailCard
                    open={open}
                    setOpen={setOpen}
                    data={props}
                />
            </ul>
            <div className='w-full mt-2 rounded px-3 py-1.5 flex justify-between'>
                <Detail>{t('part')}:</Detail>
                <Detail className="!bg-active !text-active">{part}</Detail>
            </div>
            <div className='w-full mt-2 rounded px-3 py-1.5 flex justify-between' >
                <Detail>{t('defect_type')}:</Detail>
                <Detail className="!bg-active !text-active">{defect}</Detail>
            </div>
        </li>
    )
}

export default Card