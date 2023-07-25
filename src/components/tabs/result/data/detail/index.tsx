import { useEffect, useState } from 'react'
import { request } from '../../../../../services/api'
import { Results } from '../../../../../models'
import { CircularProgress } from '@mui/material';
import Content from './Content';

function Detail() {

    const id = +window.location.pathname.split('detail/')[1]
    const [detail, setDetail] = useState<Results>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)

        request.getItemResult(id)
            .then(res => {
                const newData: Results = res.data
                newData.result_images.map((img, idx) => img.variant_id = idx + 1)
                setDetail(res.data)
                setIsLoading(false)

            })
    }, [])

    return (
        <div className='min-h-[calc(100vh-125px)] relative flex flex-col'>
            {isLoading ? (
                <CircularProgress className='!absolute !left-1/2 !top-[40%] transform -translate-x-1/2 -translate-y-1/2' />
            ) : (
                <Content detail={detail} />
            )}
        </div>
    )
}

export default Detail