import { ReactNode, Dispatch, SetStateAction } from "react"
import Header from "./Header"
import SideBar from "./SideBar"

interface IProps {
    isOpen: boolean,
    logined: boolean,
    children: ReactNode,
    currencyLanguage: string,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setCurrencyLanguage: Dispatch<SetStateAction<string>>,
}

function Layout({ currencyLanguage, setCurrencyLanguage, children, isOpen, setIsOpen, logined }: IProps) {

    return (
        <div className="flex flex-col">
            <Header
                currencyLanguage={currencyLanguage}
                setCurrencyLanguage={setCurrencyLanguage}
            />
            {logined ? (
                <div className="flex">
                    <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
                    {children}
                </div>
            ) : children}
        </div>
    )
}

export default Layout