import { Dispatch, SetStateAction } from 'react'

const listColor: string[] = ['72F34A', 'EB56F7'];

interface IProps {
    color: string,
    setColor: Dispatch<SetStateAction<string>>
}

const ColorStroke = ({ color, setColor }: IProps) => {
    return (
        <ul className="flex items-center justify-start pb-1.5 w-full gap-1.5 px-3">
            {listColor.map((item: string, idx: number) => (
                <li
                    className={`
                        ${color === item ? 'w-[18px] h-[18px] border-[3px] box-content' : 'w-[24px] h-[24px] border'} 
                        cursor-pointer rounded-full`
                    }
                    onClick={() => setColor(item)}
                    style={{ borderColor: 'rgb(172 172 172 / 60%)' }}
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