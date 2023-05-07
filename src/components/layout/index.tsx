import { ReactNode, Dispatch, SetStateAction } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface IProps {
  children: ReactNode | ReactNode[],
  currencyLanguage: string,
  setCurrencyLanguage: Dispatch<SetStateAction<string>>
}

const Layout = ({ children, currencyLanguage, setCurrencyLanguage }: IProps) => {
  return (
    <div
      className='relative before:w-full before:max-w-[640px] before:h-[640px] before:absolute before:left-0 
      before:top-0 after:absolute after:w-full after:max-w-[640px] after:h-[640px] after:rotate-180 
      after:right-0 after:bottom-0 absImg'
    >
      <div
        className='flex min-h-screen flex-col justify-between items-center before:absolute before:top-0 
        before:right-0 before:w-[500px] before:h-[410px] absShape'
      >
        <Navbar currencyLanguage={currencyLanguage} setCurrencyLanguage={setCurrencyLanguage} />
        <main className='container z-10 w-full py-12 px-5'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout