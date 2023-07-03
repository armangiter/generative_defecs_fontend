import { useState, useEffect } from "react"
import { Head } from "../../../mui/customize"
import { Models, Result as ResultType } from "../../../models"
import ListResult from "./data/ListResult"
import { request } from "../../../services/api"
import { CircularProgress, Pagination } from "@mui/material"

function Result() {

    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [results, setResults] = useState<ResultType[]>([])
    const [models, setModels] = useState<Models[]>([])

    useEffect(() => {
        setIsLoading(true)
        request.getResult()
            .then(res => {
                request.getModels()
                    .then(response => {
                        setModels(response.data || [])
                        setResults(res.data || [])
                        setIsLoading(false)
                    })
            })
    }, [])

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const filteredPagination = results?.filter((item: ResultType, idx: number) => {
        const minPage = page === 1 ? 0 : (page - 1) * 12
        const maxPage = page * 12
        return idx + 1 <= maxPage && idx + 1 > minPage
    })

    return (
        <div className="h-full">
            <Head>Your Results</Head>
            {isLoading ? (
                <div className="w-full h-[calc(100vh-350px)] relative">
                    <CircularProgress className="!absolute !left-1/2 !top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
            ) : (
                <ListResult results={filteredPagination} models={models} />
            )}
            {
                !!results && !!results.length && results.length > 12 &&
                <Pagination
                    count={Math.ceil(results.length / 12)}
                    page={page}
                    onChange={(event: React.MouseEvent<HTMLButtonElement> | null, newPage) => handleChangePage(event, newPage)}
                    sx={{
                        marginTop: '32px',
                        '.MuiButtonBase-root': {
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#A5ACBA',
                        },
                        '.MuiPagination-ul': {
                            background: '#FFFFFF',
                            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.04)',
                            borderRadius: '25px',
                            width: 'fit-content',
                            margin: '0 auto',
                        },
                        '.Mui-selected': {
                            background: 'transparent !important',
                            color: '#F97316'
                        }
                    }}
                />
            }
        </div>
    )
}

export default Result