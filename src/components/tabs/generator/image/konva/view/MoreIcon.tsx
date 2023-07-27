import { Dispatch, SetStateAction } from 'react'
import { Lines } from '../../../../../../models'
import Delete from '../../../../../../assets/icons/Delete'

interface IProps {
    setLines: Dispatch<SetStateAction<Lines[]>>,
    setLocalBlob: Dispatch<SetStateAction<File | null | undefined>>
    setUrlUploaded: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string | null | undefined>> | Dispatch<SetStateAction<string | null>> | Dispatch<SetStateAction<string | undefined>>,
}

const MoreIcon = ({ setLines, setLocalBlob, setUrlUploaded }: IProps) => {
    return (
        <div
            onClick={() => {
                setUrlUploaded('')
                setLocalBlob(null)
                setLines([])
            }}
            className='absolute cursor-pointer right-6 top-6 bg-primary py-[12px] px-[13px] flex items-center 
            justify-center gap-3 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
        >
            <Delete />
        </div>
    )
}

export default MoreIcon