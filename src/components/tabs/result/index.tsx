import { useState, useEffect } from "react"
import { Head } from "../../../mui/customize"
import { Result as ResultType, Results } from "../../../models"
import ListResult from "./data/ListResult"
import { request } from "../../../services/api"
import { CircularProgress, Pagination } from "@mui/material"
import ListGenerating from "./data/ListGenerating"
import { t } from "i18next"

function Result() {

    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [results, setResults] = useState<ResultType>({
        generated: [],
        generating: [],
        pending: []
    })

    const filterGenerate = (data: Results[]) => {
        const newData: ResultType = {
            generated: [],
            generating: [],
            pending: []
        }
        data.map(item =>
            item.status === 'p' ? newData.pending.push(item) :
                item.status === 'g' ? newData.generating.push(item) :
                    item.status === 'f' && newData.generated.push(item)
        )
        return newData
    }

    const getData = () => {
        request.getResult()
            .then(res => {
                const newData = filterGenerate(res.data || [])
                setResults(newData)
            })
    }

    useEffect(() => {
        if (!isLoading) {
            const interval = setInterval(() => {
                window.location.pathname.includes('results') && !window.location.pathname.includes('results/detail') ?
                    getData() :
                    clearInterval(interval)
            }, 8000)
        }
    }, [isLoading])

    useEffect(() => {
        setIsLoading(true)
        request.getResult()
            .then(res => {
                const newData = filterGenerate(res.data || [])
                setResults(newData)
                setIsLoading(false)
            })
    }, [])

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const filteredPagination = results.generated?.filter((item: ResultType, idx: number) => {
        const minPage = page === 1 ? 0 : (page - 1) * 12
        const maxPage = page * 12
        return idx + 1 <= maxPage && idx + 1 > minPage
    })

    return (
        <div className="h-full">
            <Head>{t('your_results')}</Head>
            {isLoading ? (
                <div className="w-full h-[calc(100vh-350px)] relative">
                    <CircularProgress className="!absolute !left-1/2 !top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
            ) : (
                <div className="flex flex-col gap-12">
                    {results.generating.length || results.pending.length ? (
                        <ListGenerating data={results} />
                    ) : null}
                    <ListResult results={filteredPagination} />
                </div>
            )}
            {
                !!results.generated && !!results.generated.length && results.generated.length > 12 &&
                <Pagination
                    count={Math.ceil(results.generated.length / 12)}
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