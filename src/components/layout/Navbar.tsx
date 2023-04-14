import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../assets/icons/logo.svg';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <header className='w-full border-0 border-b border-light-500'>
      <div className='container mx-auto flex w-full justify-between items-center py-7 px-2'>
        <img src={logo} alt='logo' />
        <Button variant='text' className='!min-w-0'>
          <LanguageIcon className="text-light-100" />
        </Button>
      </div>
    </header>
  )
}

export default Navbar