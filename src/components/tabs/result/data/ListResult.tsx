import { Results } from "../../../../models"
import Card from "./Card";

interface IProps {
    results: Results[]
}

function ListResult({ results }: IProps) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {results.map((result: Results) => (<Card key={result.id} {...result} />))}
        </ul>
    )
}

export default ListResult