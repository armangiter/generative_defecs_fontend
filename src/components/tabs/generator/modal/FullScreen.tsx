import { useState, Dispatch, SetStateAction } from 'react'
import { Modal, Box } from '@mui/material'
import { ReactComponent as FullScreenIcon } from '../../../../assets/icons/fullScreen.svg'
import { ReactComponent as SmallScreenIcon } from '../../../../assets/icons/smallScreen.svg'
import closeIcon from '../../../../assets/icons/close.svg'
import style from '../../../../mui/style'
import EditImage from '../../../editImage'
import { Lines } from '../../../../models'

interface IProps {
    urlUploaded: string,
    prevLines?: Lines[],
    isFullScreen: boolean,
    setPrevLines: Dispatch<SetStateAction<Lines[]>>,
    setIsFullScreen: Dispatch<SetStateAction<boolean>>
}

const FullScreen = ({ prevLines, setPrevLines, urlUploaded, isFullScreen, setIsFullScreen }: IProps) => {

    const [open, setOpen] = useState<boolean>(false)

    const changeScreen = () => setIsFullScreen(!isFullScreen)
    const closeModal = () => setOpen(false)
    const openModal = () => setOpen(true)

    return (
        <div>
            {isFullScreen ?
                <SmallScreenIcon
                    onClick={() => {
                        changeScreen()
                        openModal()
                    }}
                    className='cursor-pointer flex items-center'
                /> :
                <FullScreenIcon
                    onClick={() => {
                        changeScreen()
                        openModal()
                    }}
                    className='cursor-pointer flex items-center'
                />
            }
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='!w-[90%] !h-fit !max-h-[95vh] !px-8' sx={style}>
                    <img className='ml-auto mb-8 cursor-pointer' onClick={closeModal} src={closeIcon} alt="close" />
                    <EditImage
                        prevLines={prevLines}
                        setPrevLines={setPrevLines}
                        imgUploaded={urlUploaded}
                        open={open}
                    />
                </Box>
            </Modal>
        </div>
    )
}

export default FullScreen