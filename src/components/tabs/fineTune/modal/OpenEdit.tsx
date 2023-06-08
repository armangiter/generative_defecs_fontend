import { useState } from 'react'
import { Button, Modal, Box } from '@mui/material';
import edit from '../../../../assets/icons/edit.svg';
import closeCircle from '../../../../assets/icons/close.svg';
import style from '../../../../mui/style';
import { Lines, Url } from '../../../../models';
import EditImage from '../../../editImage';

interface IProps {
    data: Url,
    isLoading: boolean,
    sendMask: (maskFile: FormDataEntryValue | null) => void
}

const OpenEdit = ({ isLoading, sendMask, data }: IProps) => {

    const [open, setOpen] = useState<boolean>(false)
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const [prevLines, setPrevLines] = useState<Lines[]>([]);

    return (
        <div>
            <Button
                className='!min-w-0 !rounded-lg !w-9 !h-9 !bg-[rgba(0,0,0,0.4)]
                shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
                variant='text'
                onClick={openModal}
            >
                <img src={edit} alt='delete' />
            </Button>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='!w-[90%] !h-fit !max-h-[95vh] !px-8' sx={style}>
                    <div className="flex items-center justify-between">
                        <p className='font-extrabold text-2xl text-light-100'>Image-{data.id}</p>
                        <img className='cursor-pointer' onClick={closeModal} src={closeCircle} alt="close" />
                    </div>
                    <div className='mt-8'>
                        <EditImage
                            isLoading={isLoading}
                            sendMask={sendMask}
                            imgUploaded={data.file}
                            prevLines={prevLines}
                            setPrevLines={setPrevLines}
                            closeModal={closeModal}
                            data={data}
                            open={open}
                            typeEdit='modal'
                        />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default OpenEdit