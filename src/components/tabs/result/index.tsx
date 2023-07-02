import { useState } from "react"
import { Head } from "../../../mui/customize"
import image from '../../../assets/images/image.png'
import { Results } from "../../../models"
import ListResult from "./data/ListResult"

function Result() {

    const [results, setResults] = useState<Results[]>([
        { id: 1, title: 'Capsule-1', images: [image, image, image, image, image], part: 'Capsule', defect: 'Print Imperfect' },
        { id: 2, title: 'Capsule-1', images: [image, image, image, image, image], part: 'Capsule', defect: 'Print Imperfect' },
        { id: 3, title: 'Capsule-1', images: [image, image, image, image, image], part: 'Capsule', defect: 'Print Imperfect' },
    ])

    return (
        <div>
            <Head>Your Results</Head>
            <ListResult results={results} />
        </div>
    )
}

export default Result