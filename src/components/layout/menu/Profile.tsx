import { MouseEvent, useState } from "react"
import { Button, Menu } from "@mui/material"
import OpenSide from "../../../assets/icons/OpenSide"
import Cookies from 'universal-cookie'
import LogOut from "../../../assets/icons/LogOut"
import { t } from "i18next"

interface IProps {
    email: string
}

function Profile({ email }: IProps) {

    const cookies: Cookies = new Cookies()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const openMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    const Logout = () => {
        cookies.remove('access', { path: '/' })
        cookies.remove('refresh', { path: '/' })
        window.location.reload()
    }

    return (
        <>
            <Button
                onClick={openMenu}
                className="!normal-case"
            >
                <div className="rotate-90 opacity-[0.8]">
                    <OpenSide isActive={false} />
                </div>
                <p className="!min-w-[100px]">
                    {email}
                </p>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
            >
                <div className="p-4 w-[240px]">
                    <p className='text-dark-100 text-sm font-medium'>{email.split('@')[0]}</p>
                    <p className='text-light-200 text-xs font-normal border-0 border-b border-solid border-border pb-4'>
                        {email}
                    </p>
                    <div className="flex items-center justify-start pt-4 cursor-pointer" onClick={Logout}>
                        <LogOut />
                        <p className="text-red-100 text-xs font-normal ml-2">{t('logout')}</p>
                    </div>
                </div>
            </Menu>
        </>
    )
}

export default Profile