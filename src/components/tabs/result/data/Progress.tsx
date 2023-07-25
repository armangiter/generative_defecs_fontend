import { t } from "i18next";
import { Results } from "../../../../models"
import { Label } from "../../../../mui/customize";
import { LinearProgress } from '@mui/material'

interface IProps {
    data: Results[]
}

function Progress({ data }: IProps) {
    return (
        <ul className="rounded-lg bg-svg max-h-[204px] py-2 overflow-auto">
            {!!data.length && data.map((item: Results) => (
                <li key={item.id} className="flex items-center justify-between py-5 px-4">
                    <div className="flex items-center justify-start">
                        <Label>{item.defect_type.name}</Label>
                        <p
                            className={`text-xs font-medium py-0.5 px-2 rounded-[5px] ml-2
                            ${item.status === 'p' ? 'bg-dark-200 text-light-200' : 'bg-yellow-100 text-yellow-100'}`}
                        >{item.status === 'p' ? t('pending') : t('in_progress')}</p>
                    </div>
                    <div className="relative !w-3/4 !h-[30px]">
                        <LinearProgress
                            value={item.percent || 0}
                            variant="determinate"
                            sx={{ '.MuiLinearProgress-bar': { background: '#6B7280' } }}
                            className="
                                !w-full !h-full !rounded-[20px] !bg-primary !border !border-solid !border-light-300
                        "
                        />
                        <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">{item.percent || 0}%</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Progress