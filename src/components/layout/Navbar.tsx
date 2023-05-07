import { Dispatch, SetStateAction } from 'react';
import logo from '../../assets/icons/logo.svg';
import Language from './menu/Language';

interface IProps {
  currencyLanguage: string,
  setCurrencyLanguage: Dispatch<SetStateAction<string>>
}

const Navbar = ({ currencyLanguage, setCurrencyLanguage }: IProps) => {
  return (
    <header className='w-full border-0 border-b border-light-500'>
      <div className='container mx-auto flex w-full justify-between items-center py-7 px-2'>
        <img src={logo} alt='logo' />
        <Language currencyLanguage={currencyLanguage} setCurrencyLanguage={setCurrencyLanguage} />
      </div>
    </header>
  )
}

export default Navbar