import { ReactNode, useState } from "react"
import Result from "../../assets/icons/Result"
import Generator from "../../assets/icons/Generator"
import { Link } from "react-router-dom"
import OpenSide from "../../assets/icons/OpenSide"
import { t } from "i18next"

interface Tabs {
    id: number,
    name: string,
    icon: ReactNode,
    link: string
}

function SideBar() {

    const [selectedTab, setSelectedTab] = useState<string>('Generator');
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const listTab: Tabs[] = [
        { id: 1, name: t('generator'), icon: <Generator isActive={selectedTab === 'Generator'} />, link: 'generator' },
        { id: 2, name: t('results'), icon: <Result isActive={selectedTab === 'Results'} />, link: 'result' }
    ]

    return (
        <div
            className={`
                sticky top-[65px] left-0 h-[calc(100vh-65px)] transition-[width] 
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
                <ul>
                    {listTab.map((tab: Tabs, idx: number) => (
                        <Link key={tab.id} to={`/${tab.link}`} onClick={() => setSelectedTab(tab.name)}>
                            <li
                                className={`
                                py-2 flex items-center justify-start gap-2 transition
                                ${isOpen ? 'px-4 min-w-[192px]' : 'p-0'}
                                ${idx > 0 && 'mt-4'}
                                ${selectedTab === tab.name && 'bg-active rounded-md'}
                            `}
                            >
                                {tab.icon}{' '}
                                {!!isOpen && (
                                    <p
                                        className={`
                                    ${selectedTab === tab.name ?
                                                '!text-active text-sm font-semibold' :
                                                '!text-inactive text-sm font-medium'
                                            }`}
                                    >{tab.name}</p>
                                )}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar