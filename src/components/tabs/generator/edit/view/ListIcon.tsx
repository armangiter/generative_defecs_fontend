import { ReactElement, useState, Dispatch, MouseEvent, SetStateAction } from 'react'
import { Divider, Menu, Slider } from '@mui/material';

// Icons
import { ReactComponent as Crop } from '../../../../../assets/icons/crop.svg';
import { ReactComponent as Edit } from '../../../../../assets/icons/edit.svg';
import { ReactComponent as MouseCircle } from '../../../../../assets/icons/mouseCircle.svg';
import { ReactComponent as MouseSquare } from '../../../../../assets/icons/mouseSquare.svg';
import { ReactComponent as Eraser } from '../../../../../assets/icons/eraser.svg';
import GestureIcon from '@mui/icons-material/Gesture';

interface ListIcon {
  name: string,
  component: ReactElement
}

interface IProps {
  type: string,
  slider: number,
  typeRect: string,
  setType: Dispatch<SetStateAction<string>>,
  setTypeRect: Dispatch<SetStateAction<string>>,
  changeSlider: (event: Event, newValue: number | number[]) => void,
}

const ListIcon = ({ type, setType, slider, typeRect, setTypeRect, changeSlider }: IProps) => {

  const handleClass = (type: boolean, name?: string) => type ? name ? 'activeSIcon' : 'activeIcon' : ''
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const open = Boolean(anchorEl);

  const openMenu = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const closeMenu = () =>
    setAnchorEl(null);

  const listIcons: ListIcon[] = [{
    name: 'Crop', component: <Crop className={handleClass(type === 'Crop')} />,
  }, {
    name: 'Edit', component: <Edit className={handleClass(type === 'Edit')} />,
  }, {
    name: 'MouseCircle', component: <MouseCircle className={handleClass(type === 'MouseCircle')} />,
  }, {
    name: 'MouseSquare', component: <MouseSquare className={handleClass(type === 'MouseSquare')} />,
  }, {
    name: 'MouseDraw', component:
      <>
        <div onClick={openMenu} className={handleClass(type === 'MouseDraw', 'Draw')}>
          <GestureIcon />
        </div>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={closeMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            '.MuiPaper-root': {
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08) !important',
              borderRadius: '8px !important',
              overflow: 'hidden',
              border: 'none'
            },
            ".MuiList-root": {
              backgroundColor: "#FFFFFF",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 220,
              padding: 0
            },
            '.MuiSlider-rail': {
              background: '#DFE2E6'
            }
          }}
        >
          <Slider
            aria-label="Temperature"
            className='!w-56'
            defaultValue={30}
            value={slider}
            min={1}
            max={70}
            size='small'
            sx={{ margin: '6px 3px 12px', width: '160px !important' }}
            onChange={changeSlider}
          />
          <p className='font-normal text-sm text-light-200 ml-2.5'>{slider}</p>
        </Menu>
      </>
    ,
  }, {
    name: 'Eraser', component: <Eraser className={handleClass(type === 'Eraser', 'Eraser')} />,
  }]
  const changeIcon = (item: ListIcon) => {
    setType(item.name)
    item.name === 'MouseSquare' || item.name === 'MouseCircle' || item.name === 'Crop' || item.name === 'MouseDraw' ?
      setTypeRect(item.name) : undefined
  }

  return (
    <ul
      className='absolute left-6 top-6 bg-light-100 py-[9px] px-[13px] flex items-center justify-center 
      rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.08)]'
    >
      {listIcons.map((item, idx) =>
        <li
          className={`cursor-pointer flex items-center ${idx === 2 || idx === 3 || idx === 4 ? 'ml-4' : ''}`}
          key={idx}
        >
          <div onClick={() => changeIcon(item)}>
            {item.component}
          </div>
          {idx === 0 || idx === 4 ?
            <Divider
              className='!bg-dark-100 opacity-[0.24] !h-px !w-6 rotate-90'
            /> : undefined
          }
        </li>
      )}
    </ul>
  )
}

export default ListIcon