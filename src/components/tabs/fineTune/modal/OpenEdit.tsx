import { useState } from 'react'
import { Button, Modal, Box } from '@mui/material';
import edit from '../../../../assets/icons/edit.svg';
import closeCircle from '../../../../assets/icons/close.svg';
import style from '../../../../mui/style';
import { Url } from '../../../../models';
import EditImage from '../../../editImage';
import { t } from 'i18next';

interface IProps {
    data: Url
}

const OpenEdit = ({ data }: IProps) => {

    const [open, setOpen] = useState(false)
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

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
                        <EditImage imgUploaded={data.file} data={data} open={open} />
                    </div>
                    <div className='flex items-center justify-end gap-4 mt-8'>
                        <Button color='secondary' variant='outlined' onClick={closeModal}>{t('discard')}</Button>
                        <Button color='inherit' variant='contained' onClick={closeModal}>{t('save_change')}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default OpenEdit