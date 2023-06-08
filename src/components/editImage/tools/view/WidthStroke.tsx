import { Slider } from '@mui/material';

interface IProps {
    slider: number,
    changeSlider: (event: Event, newValue: number | number[]) => void,
}

const WidthStroke = ({ slider, changeSlider }: IProps) => {
    return (
        <div className='flex items-center justify-center'>
            <Slider
                aria-label="Temperature"
                className='!min-w-[187px]'
                defaultValue={30}
                value={slider}
                min={1}
                max={70}
                size='small'
                sx={{ margin: '6px 3px 12px', width: '160px !important' }}
                onChange={changeSlider}
            />
            <p className='font-normal text-sm text-light-200 ml-2.5'>{slider}</p>
        </div>
    )
}

export default WidthStroke