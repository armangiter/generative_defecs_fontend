import { useState, Dispatch, SetStateAction, useEffect, useRef } from 'react'
import DrawKonva from './tools/DrawKonva'
import ListIcon from './tools/view/ListIcon'
import { Lines, ResponseImg, Size, Url } from '../../models'

interface IProps {
    data?: Url,
    typeEdit?: string,
    open?: boolean,
    isLoading: boolean,
    prevLines?: Lines[],
    imgUploaded: string,
    closeModal: () => void,
    sendMask: ((maskFile: FormDataEntryValue | null) => void) | ((maskFile: FormDataEntryValue | null, typeEdit: string, data: ResponseImg) => void),
    setPrevLines?: Dispatch<SetStateAction<Lines[]>>,
}

const EditImage = ({ closeModal, typeEdit, isLoading, sendMask, prevLines, setPrevLines, open, imgUploaded, data }: IProps) => {

    const [color, setColor] = useState('FF0000')
    const [slider, setSlider] = useState<number>(12)
    const [type, setType] = useState<string>('MouseDraw')
    const [typeRect, setTypeRect] = useState<string>('MouseDraw')
    const [localImg, setLocalImg] = useState<string>(imgUploaded)
    const [sizeImage, setSizeImage] = useState<Size>()

    const contentImg = useRef<HTMLElement>(null);

    const changeSlider = (event: Event, newValue: number | number[]) =>
        typeof newValue === 'number' && setSlider(newValue);

    useEffect(() => {
        const img: HTMLImageElement = new window.Image()
        img.onload = () => {
            let size: Size = {
                width: 300,
                height: 168
            };
            size.width = img.width
            size.height = img.height
            setSizeImage(size)
        }
        if (data && data.blob)
            img.src = data.blob
        else if (imgUploaded)
            img.src = imgUploaded;
    }, [])


    return (
        <div
            ref={contentImg}
            className={`w-full rounded-md overflow-hidden relative`}
            style={{
                height: contentImg.current && sizeImage && sizeImage.width ?
                    `${(contentImg.current.clientWidth / sizeImage.width) * sizeImage.height}px` : '100%',
                maxHeight: '95vh !important'
            }}
        >
            <DrawKonva
                type={type}
                data={data}
                open={open}
                typeEdit={typeEdit}
                color={color}
                slider={slider}
                prevLines={prevLines}
                isLoading={isLoading}
                setPrevLines={setPrevLines}
                closeModal={closeModal}
                typeRect={typeRect}
                isFullScreen={false}
                sizeImage={sizeImage}
                urlUploaded={localImg}
                sendMask={sendMask}
                setUrlUploaded={setLocalImg}
            />
            <ListIcon
                type={type}
                color={color}
                slider={slider}
                setType={setType}
                typeRect={typeRect}
                setColor={setColor}
                setTypeRect={setTypeRect}
                changeSlider={changeSlider}
            />
        </div>
    )
}

export default EditImage