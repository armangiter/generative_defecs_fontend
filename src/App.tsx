import Layout from "./components/layout"
import TabPage from "./components/TabPage"

function App() {
  return (
    <div
      className="mx-auto before:w-[640px] before:h-[640px] before:absolute before:left-0 before:top-0 after:absolute after:w-[640px] after:h-[640px] after:rotate-180 after:right-0 after:bottom-0 min-h-screen absImg"
    >
      <Layout>
        <TabPage />
      </Layout>
      {/* <Routes> */}
      {/* <Route path="/*" element={ } /> */}
      {/* </Routes> */}
    </div>
  )
}

export default App
