import { updateUrl } from "../../../helper"
import { Url } from "../../../models"
import { Button, Skeleton, CircularProgress } from '@mui/material';
import OpenEdit from "./modal/OpenEdit";
import remove from '../../../assets/icons/delete.svg';
import { useEffect } from "react";

interface IProps {
    urlUploaded: Url[],
    isLoading: boolean,
    idLoading: number | undefined,
    removeImage: (id: number) => void,
    sendMask: (maskFile: FormDataEntryValue | null) => void,
}

const ListResult = ({ sendMask, urlUploaded, isLoading, idLoading, removeImage }: IProps) => {
    return (
        <>
            {!!urlUploaded.length && urlUploaded.map((item: Url) => (
                <li key={item.id} className='relative rounded-md overflow-hidden h-[120px]'>
                    {
                        item.isLoaded ? (
                            <img
                                src={updateUrl(item.file)}
                                className='h-full object-cover'
                            />
                        ) : (
                            <Skeleton variant="rectangular" style={{ width: '100%', height: '100%' }} />
                        )
                    }
                    <div className="flex flex-wrap items-center justify-end gap-2 !absolute right-3 top-3">
                        <OpenEdit isLoading={isLoading} sendMask={sendMask} data={item} />
                        <Button
                            className='!min-w-0 !rounded-lg !w-9 !h-9 !bg-[rgba(0,0,0,0.4)]
              shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
                            variant='text'
                            color='error'
                            onClick={() => typeof item.id === 'number' && removeImage(item.id)}
                        >
                            {
                                idLoading === item.id ?
                                    <CircularProgress className='!w-full !h-full' /> :
                                    <img src={remove} alt='delete' />
                            }
                        </Button>
                    </div>
                </li>
            ))}
        </>
    )
}

export default ListResult