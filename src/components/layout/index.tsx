import { ReactNode, Dispatch, SetStateAction } from "react"
import Header from "./Header"
import SideBar from "./SideBar"

interface IProps {
    isOpen: boolean,
    children: ReactNode,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

function Layout({ children, isOpen, setIsOpen }: IProps) {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex">
                <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
                {children}
            </div>
        </div>
    )
}

export default Layout