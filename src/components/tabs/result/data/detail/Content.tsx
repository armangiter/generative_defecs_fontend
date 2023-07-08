import { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import ArrowLeft from "../../../../../assets/icons/ArrowLeft";
import { Head, Detail as DetailTag, Title, Label } from '../../../../../mui/customize';
import { t } from "i18next";
import { ResultImg, Results, Size } from "../../../../../models";
import Download from '../../../../../assets/icons/Download';
import { Button } from '@mui/material'
import axios from 'axios';

interface IProps {
    detail: Results | undefined
}

function Content({ detail }: IProps) {

    const baseImg = useRef(null)
    const [selectedImg, setSelectedImg] = useState<ResultImg>(detail && detail.result_images[0])
    const [sizeImg, setSizeImg] = useState<Size>({})

    const downloadImg = (url: string) => {
        axios.get(url, {
            responseType: 'blob'
        })
            .then(response => {
                const href = URL.createObjectURL(response.data);

                const anchorElement = document.createElement('a');
                anchorElement.href = href;
                anchorElement.download = 'result.png';

                document.body.appendChild(anchorElement);
                anchorElement.click();

                document.body.removeChild(anchorElement);
                window.URL.revokeObjectURL(href);
            })
    }

    const changeURL = (url: string) => url.replace('http://minio:9000', 'http://153.156.254.150:50818')

    useEffect(() => {
        const img: HTMLImageElement = new window.Image()

        img.onload = () => {
            let size: Size = {
                width: 0,
                height: 0
            };

            size.width = img.width
            size.height = img.height

            setSizeImg(size)
        }
        if (detail) img.src = changeURL(detail.image)
    }, [])

    const heightImg = baseImg.current && baseImg.current.clientHeight

    if (detail && detail.id)
        return (
            <div className="flex flex-col">
                <div className='flex items-center justify-between'>
                    <Link to='/results'>
                        <div className='flex items-center justify-start'>
                            <ArrowLeft />
                            <Head className='!mb-0 !ml-3'>{detail?.defect_model.name}</Head>
                        </div>
                    </Link>
                    <div className='flex items-center justify-end gap-6'>
                        <div className='flex items-center justify-end gap-4'>
                            <DetailTag className='!text-light-100'>{t('part')}</DetailTag>
                            <DetailTag className='!text-active !font-medium'>{detail.defect_model.name}</DetailTag>
                        </div>
                        <div className='flex items-center justify-end gap-4'>
                            <DetailTag className='!text-light-100'>{t('defect_type')}</DetailTag>
                            <DetailTag className='!text-active !font-medium'>{detail.defect_type.name}</DetailTag>
                        </div>
                        <div className='flex items-center justify-end gap-4'>
                            <DetailTag className='!text-light-100'>{t('time')}</DetailTag>
                            <DetailTag className='!text-active !font-medium'>{detail?.created.split("T")[0]}</DetailTag>
                        </div>
                    </div>
                </div>
                <div className='flex items-start justify-center mt-6 gap-8'>
                    <div className='flex justify-start flex-col w-1/2'>
                        <Title className="!mb-2">{t('base_image')}</Title>
                        <div className="w-full p-5 rounded-lg border border-dashed broder-[rgba(145, 154, 167, 0.50)]">
                            <img
                                className='w-full rounded-md'
                                alt="orgImage"
                                ref={baseImg}
                                src={changeURL(detail.image)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-start flex-col w-1/2'>
                        <Title className="!mb-2">{t('variant')}-{selectedImg.variant_id}</Title>
                        <div
                            className="w-full p-5 rounded-lg border border-dashed 
                            bg-dark-300 relative broder-[rgba(145, 154, 167, 0.50)]"
                        >
                            <img
                                className='w-full rounded-md'
                                alt='generatedImg'
                                style={{ height: heightImg ? heightImg : 0 }}
                                src={selectedImg.file}
                            />
                            <div
                                className='absolute top-10 right-10 rounded-lg overflow-hidden bg-primary z-10 w-10 h-10
                                flex items-center justify-center'
                                onClick={() => downloadImg(selectedImg.file)}
                            >
                                <Download />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-6'>
                    <Title>{t('generated_images')} ({detail.result_images.length})</Title>
                    <Button
                        color='secondary'
                        className='!bg-dark-100 !px-5'
                        onClick={() => detail.result_images.map(item => downloadImg(item.file))}
                    >{t('download_all')}</Button>
                </div>
                <ul
                    className='w-full rounded-lg border border-solid border-border bg-svg p-6 mt-[18px] grid grid-cols-7 gap-2.5
                max-h-[212px] overflow-auto'
                >
                    {detail.result_images.map(item => (
                        <li
                            className={`rounded-md bg-primary border border-solid border-transparent
                        shadow-[0px_2px_10px_0px_rgba(100,_116,_139,_0.10)] p-2 transition cursor-pointer
                        ${selectedImg.id === item.id && '!border-light-100'}`}
                            onClick={() => setSelectedImg(item)}
                            key={item.id}
                        >
                            <img
                                className='w-full rounded-md'
                                src={item.file}
                                alt='image'
                            />
                            <Label className='!mt-2 !text-active'>{t('variant')}-{item.variant_id}</Label>
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default Content