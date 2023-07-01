import { ReactNode } from "react"
import Header from "./Header"
import SideBar from "./SideBar"

interface IProps {
    children: ReactNode
}

function Layout({ children }: IProps) {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex">
                <SideBar />
                {children}
            </div>
        </div>
    )
}

export default Layout