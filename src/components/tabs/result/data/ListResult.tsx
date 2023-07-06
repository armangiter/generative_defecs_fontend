import { t } from "i18next";
import Verify from "../../../../assets/icons/Verify";
import { Models, Results } from "../../../../models"
import Card from "./Card";

interface IProps {
    results: Results[],
    models: Models[]
}

function ListResult({ results, models }: IProps) {
    return (
        <div>
            <div className="flex items-center justify-start gap-2">
                <Verify />
                <p className="text-lg font-medium text-verify">{t('generated')}</p>
            </div>
            <ul
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 bg-svg p-4 rounded-lg"
            >
                {!!results && !!results.length && results.map((result: Results) => (<Card key={result.id} models={models} {...result} />))}
            </ul>
        </div>
    )
}

export default ListResult