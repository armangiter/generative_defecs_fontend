import { Dispatch, SetStateAction } from 'react'
import deleteImg from '../../../../assets/icons/delete.svg'

interface IProps {
    setUrlUploaded: Dispatch<SetStateAction<string | null | undefined>> | Dispatch<SetStateAction<string | null>> | Dispatch<SetStateAction<string | undefined>>
}

const DeleteImg = ({ setUrlUploaded }: IProps) => {
    return (
        <img
            className='cursor-pointer'
            onClick={() => setUrlUploaded('')}
            src={deleteImg}
            alt='delete'
        />
    )
}

export default DeleteImg