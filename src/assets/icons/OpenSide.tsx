import { ActiveNode } from "../../models";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function OpenSide({ isActive }: ActiveNode) {
    return (
        <>
            {isActive ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </>
    )

}

export default OpenSide