import { Models, Results } from "../../../../models"
import Card from "./Card";

interface IProps {
    results: Results[],
    models: Models[]
}

function ListResult({ results, models }: IProps) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {!!results.length && results.map((result: Results) => (<Card key={result.id} models={models} {...result} />))}
        </ul>
    )
}

export default ListResult