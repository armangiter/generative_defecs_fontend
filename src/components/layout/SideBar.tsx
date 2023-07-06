import { ReactNode, useState, Dispatch, SetStateAction } from "react"
import Result from "../../assets/icons/Result"
import Generator from "../../assets/icons/Generator"
import { NavLink, useLocation } from "react-router-dom"
import OpenSide from "../../assets/icons/OpenSide"
import { t } from "i18next"

interface IProps {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

interface Tabs {
    icon: ReactNode,
    name: string,
    link: string,
    id: number,
}

function SideBar({ isOpen, setIsOpen }: IProps) {
    const location = useLocation()

    const path = location.pathname.split('/')[1]

    const [selectedTab, setSelectedTab] = useState<string>(
        location &&
            path === 'login' ? 'generator' : path
    );


    const listTab: Tabs[] = [
        { id: 1, name: t('generator'), icon: <Generator isActive={selectedTab === 'generator'} />, link: 'generator' },
        { id: 2, name: t('result'), icon: <Result isActive={selectedTab === 'results'} />, link: 'results' }
    ]

    return (
        <div
            className={`
                sticky top-[65px] left-0 h-[calc(100vh-75px)] transition-[width] 
                transition-ease-in duration-300 bg-primary
            `}
        >
            <div
                className={`relative h-full transition-[width] transition-ease-in duration-300 px-6 py-7 border-0 
                border-r border-border after:absolute after:left-0 after:bottom-0 after:z-10 after:w-full after:h-56 absSubtract ${isOpen ? 'w-60' : 'w-20'}`}
            >
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-full border border-border w-fit absolute top-8 bg-primary right-[-14px] cursor-pointer"
                >
                    <OpenSide isActive={isOpen} />
                </div>
                <ul className="grid gap-2">
                    {listTab.map((tab: Tabs, idx: number) => (
                        <NavLink
                            className={({ isActive }) => isActive ? `activeLink` : 'unActive'}
                            key={tab.id}
                            to={`/${tab.link}`}
                            onClick={() => setSelectedTab(tab.name.toLowerCase())}
                        >
                            <li
                                className={`
                                flex items-center justify-start transition gap-2
                                ${isOpen ? 'px-4 min-w-[192px]' : 'p-0'}
                                `}
                            >
                                {tab.icon}{' '}
                                {!!isOpen && (
                                    <p
                                        className={`
                                    ${selectedTab === tab.name.toLowerCase() ?
                                                '!text-active text-sm font-semibold' :
                                                '!text-inactive text-sm font-medium'
                                            }`}
                                    >{tab.name.toLowerCase()}</p>
                                )}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar