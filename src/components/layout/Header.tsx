import { useState, MouseEvent, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material"
import Logo from "../../assets/icons/Logo"
import { request } from "../../services/api";
import Cookies from "universal-cookie";
import OpenSide from "../../assets/icons/OpenSide";
import LogOut from "../../assets/icons/LogOut";
import { t } from "i18next";

function Header() {

  const cookies = new Cookies()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [email, setEmail] = useState<string>('')
  const open = Boolean(anchorEl);
  const openMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  useEffect(() => {
    if (cookies.get('access')) {
      request.user()
        .then(res => {
          setEmail(res.data.email)
        })
    }
  }, [])

  const Logout = () => {
    cookies.remove('access', { path: '/' })
    cookies.remove('refresh', { path: '/' })
    window.location.reload()
  }

  return (
    <div
      className="w-full py-4 px-8 bg-primary border-0 border-b border-border sticky top-0 left-0 flex justify-between items-center"
    >
      <Logo />
      {!!cookies.get('access') && (
        <>
          <Button
            onClick={openMenu}
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
      )}
    </div >
  )
}

export default Header