import { useState } from 'react'
import { Label } from "../../../mui/customize"
import DetailCard from './modal/DetailCard'

interface Result {
  id: number,
  date: string,
  type: string,
  model: string,
  images: string[]
}

interface IProps {
  data: Result
}

const ListResult = ({ data }: IProps) => {
  return (
    <li className='bg-dark-300 p-2 rounded-md	'>
      <Label>{data.date}</Label>
      <ul className="p-1 border border-light-400 gap-1 rounded flex items-center justify-start">
        {data.images.slice(0, data.images.length > 4 ? 3 : 4).map((item, idx) =>
          <li key={idx} className="w-1/4 h-10">
            <img src={item} alt='result' className="w-full h-full object-cover rounded opacity-[0.85]" />
          </li>
        )}
        {data.images.length > 4 && <DetailCard data={data} />}
      </ul>
      <p className='w-full mt-2 opacity-[0.8] rounded px-3 py-1.5 font-normal text-xs text-primary bg-dark-200' >
        Type: {data.type}
      </p>
      <p className='w-full mt-2 opacity-[0.8] rounded px-3 py-1.5 font-normal text-xs text-primary bg-dark-200' >
        Model: {data.model}
      </p>
    </li>
  )
}

export default ListResult