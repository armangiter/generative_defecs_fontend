import { Dispatch, SetStateAction } from 'react'

const listColor: string[] = ['FF0000', 'FF8A00', 'FFE600', '00FF57', '00E0FF', '0038FF', '9E00FF', '000000'];

interface IProps {
    color: string,
    setColor: Dispatch<SetStateAction<string>>
}

const ColorStroke = ({ color, setColor }: IProps) => {

    const hexToRgba = (hx: string) => {
        const r = parseInt(hx.substring(0, 2), 16);
        const g = parseInt(hx.substring(2, 4), 16);
        const b = parseInt(hx.substring(4, 6), 16);
        return `rgba(${r},${g},${b},0.6)`;
    }

    return (
        <ul className="flex items-center justify-between pb-1.5 w-full px-3">
            {listColor.map((item: string) => (
                <li
                    className={`${color === item ? 'w-[18px] h-[18px] border-[3px] box-content' : 'w-[24px] h-[24px] border-0'} cursor-pointer rounded-full`}
                    onClick={() => setColor(item)}
                    style={{ borderColor: hexToRgba(item) }}
                    key={item}
                >
                    <span
                        style={{ background: `#${item}` }}
                        className={`rounded-full block w-full h-full`}
                    ></span>
                </li>
            ))}
        </ul>
    )
}

export default ColorStroke