import { ReactNode, Dispatch, SetStateAction } from "react"
import Header from "./Header"
import SideBar from "./SideBar"

interface IProps {
    isOpen: boolean,
    logined: boolean,
    children: ReactNode,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

function Layout({ children, isOpen, setIsOpen, logined }: IProps) {

    return (
        <div className="flex flex-col">
            <Header />
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