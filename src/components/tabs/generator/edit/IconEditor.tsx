import { ReactElement, useState, Dispatch, SetStateAction } from 'react'
import { Divider } from '@mui/material';

// Icons
import { ReactComponent as Crop } from '../../../../assets/icons/crop.svg';
import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg';
import { ReactComponent as MouseCircle } from '../../../../assets/icons/mouseCircle.svg';
import { ReactComponent as MouseSquare } from '../../../../assets/icons/mouseSquare.svg';
import { ReactComponent as Eraser } from '../../../../assets/icons/eraser.svg';

interface ListIcon {
  name: string,
  component: ReactElement
}

interface IProps {
  type: string,
  typeRect: string,
  setType: Dispatch<SetStateAction<string>>,
  setTypeRect: Dispatch<SetStateAction<string>>
}

const EditImage = ({ type, setType, typeRect, setTypeRect }: IProps) => {

  const handleClass = (type: boolean, name?: string) => type ? name ? 'activeSIcon' : 'activeIcon' : ''

  const listIcons: ListIcon[] = [{
    name: 'Crop', component: <Crop className={handleClass(type === 'Crop')} />,
  }, {
    name: 'Edit', component: <Edit className={handleClass(type === 'Edit')} />,
  }, {
    name: 'MouseCircle', component: <MouseCircle className={handleClass(type === 'MouseCircle')} />,
  }, {
    name: 'MouseSquare', component: <MouseSquare className={handleClass(type === 'MouseSquare')} />,
  }, {
    name: 'Eraser', component: <Eraser className={handleClass(type === 'Eraser', 'Eraser')} />,
  }]
  const changeIcon = (item: ListIcon) => {
    setType(item.name)
    item.name === 'MouseSquare' || item.name === 'MouseCircle' || item.name === 'Crop' ?
      setTypeRect(item.name) : undefined
  }

  return (
    <ul
      className='absolute left-6 top-6 bg-light-100 py-[9px] px-[13px] flex items-center justify-center rounded-lg
      shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
    >
      {listIcons.map((item, idx) =>
        <li
          className={`cursor-pointer flex items-center ${idx === 2 || idx === 3 ? 'ml-4' : ''}`}
          key={idx}
        >
          <div onClick={() => changeIcon(item)}>
            {item.component}
          </div>
          {idx === 0 || idx === 3 ?
            <Divider
              className='!bg-dark-100 opacity-[0.24] !h-px !w-6 rotate-90'
            /> : undefined
          }
        </li>
      )}
    </ul>
  )
}

export default EditImage