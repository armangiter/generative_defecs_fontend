import { useState, useEffect } from "react";
import Logo from "../../assets/icons/Logo"
import { request } from "../../services/api";
import Cookies from "universal-cookie";
import Profile from "./menu/Profile";
import Language from "./menu/Language";

function Header() {

  const cookies = new Cookies()
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    if (cookies.get('access')) {
      request.user()
        .then(res => {
          setEmail(res.data.email)
        })
    }
  }, [])

  return (
    <div
      className="w-full py-4 px-8 bg-primary border-0 border-b border-border sticky top-0 left-0 flex justify-between items-center z-10"
    >
      <Logo />
      {
        !!cookies.get('access') && (
          <div className="flex items-center justify-end gap-1">
            <Language />
            <Profile email={email} />
          </div>
        )
      }
    </div >
  )
}

export default Header