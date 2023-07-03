import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Cookies from 'universal-cookie'

// Components
import Layout from "./components/layout"
import Generator from "./components/tabs/generator"
import Result from "./components/tabs/result"
import Login from './components/register/Login'
import SignUp from './components/register/SignUp'

function App() {

  const cookies: Cookies = new Cookies
  const token = cookies.get('access')
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Layout logined={!!token} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-active w-full py-6 px-8">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          draggableDirection="y"
        />
        {!!token ? (
          <Routes>
            <Route path="/" element={<Navigate to='/generator' />} />
            <Route path="/login" element={<Navigate to='/generator' />} />
            <Route path="/generator" element={<Generator isOpen={isOpen} />} />
            <Route path="/results" element={<Result />} />
          </Routes>
        ) : (
          <div
            className='after:absolute after:bottom-0 after:right-0 after:w-[900px] after:h-[465px] min-h-[85vh] absSubtract2
          grid place-items-center'
          >
            <Routes>
              <Route path="/*" element={<Navigate to='/login' />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default App
