import { useState } from "react";
import Layout from "./components/layout"
import TabPage from "./components/TabPage"
import { ToastContainer } from 'react-toastify';
import i18next from "i18next";

function App() {

  const [currencyLanguage, setCurrencyLanguage] = useState<string>(i18next.language.toUpperCase());

  return (
    <div
      className="mx-auto min-h-screen"
    >
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
      <Layout currencyLanguage={currencyLanguage} setCurrencyLanguage={setCurrencyLanguage}>
        <TabPage />
      </Layout>
    </div>
  )
}

export default App
