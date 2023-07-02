import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

// Components
import Layout from "./components/layout"
import Generator from "./components/tabs/generator"
import Result from "./components/tabs/result"

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
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
        <Routes>
          <Route path="/" element={<Navigate to='/generator' />} />
          <Route path="/generator" element={<Generator isOpen={isOpen} />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
