import { Tooltip } from "@mui/material"

interface IProps {
    infoText: string
}

function Info({ infoText }: IProps) {
    return (
        <Tooltip title={infoText} placement="top-start">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/linear/info-circle">
                    <g id="vuesax/linear/info-circle_2">
                        <g id="info-circle">
                            <path id="Vector" d="M8.00016 14.6667C11.6668 14.6667 14.6668 11.6667 14.6668 8.00004C14.6668 4.33337 11.6668 1.33337 8.00016 1.33337C4.3335 1.33337 1.3335 4.33337 1.3335 8.00004C1.3335 11.6667 4.3335 14.6667 8.00016 14.6667Z" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_2" d="M8 5.33337V8.66671" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_3" d="M7.99609 10.6666H8.00208" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </g>
                </g>
            </svg>
        </Tooltip>
    )
}

export default Info