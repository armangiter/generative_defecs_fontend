import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface IProps {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: IProps) => {
  return (
    <div className='flex min-h-screen flex-col justify-between items-center before:absolute before:top-0 
    before:right-0 before:w-[500px] before:h-[410px] absShape'>
      <Navbar />
      <main className='container z-10 w-full py-12'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout