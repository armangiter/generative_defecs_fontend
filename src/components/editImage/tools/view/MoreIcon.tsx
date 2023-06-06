import { Dispatch, SetStateAction } from 'react'
import DeleteImg from '../typeEdit/DeleteImg'
import FullScreen from '../../../tabs/generator/modal/FullScreen'
import { Lines } from '../../../../models'

interface IProps {
    urlUploaded: string,
    prevLines?: Lines[],
    isFullScreen: boolean,
    setPrevLines: Dispatch<SetStateAction<Lines[]>>,
    setUrlUploaded: Dispatch<SetStateAction<string | null | undefined>> | Dispatch<SetStateAction<string | null>> | Dispatch<SetStateAction<string | undefined>>,
    setIsFullScreen: Dispatch<SetStateAction<boolean>>,
}

const MoreIcon = ({ urlUploaded, setUrlUploaded, prevLines, setPrevLines, isFullScreen, setIsFullScreen }: IProps) => {
    return (
        <div
            className='absolute right-6 top-6 bg-light-100 py-[12px] px-[13px] flex items-center 
            justify-center gap-3 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
        >
            <DeleteImg setUrlUploaded={setUrlUploaded} />
            <FullScreen
                urlUploaded={urlUploaded}
                prevLines={prevLines}
                setPrevLines={setPrevLines}
                isFullScreen={isFullScreen}
                setIsFullScreen={setIsFullScreen}
            />
        </div>
    )
}

export default MoreIcon