import { Result } from "../../../../models"
import Convert from "../../../../assets/icons/Convert";
import { t } from "i18next";
import Progress from "./Progress";

interface IProps {
    data: Result,
}

function ListGenerating({ data }: IProps) {

    const newList = [...data.generating, ...data.pending]

    return (
        <div>
            <div className="flex items-center justify-start gap-2 mb-4">
                <Convert />
                <p className="font-medium text-lg text-light-200">{t('generating')}</p>
            </div>
            {<Progress data={newList} />}
        </div>
    )
}

export default ListGenerating