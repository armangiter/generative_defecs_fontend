import { Dispatch, SetStateAction, useState } from "react";
import { Menu, Button, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from "i18next";

interface IProps {
  currencyLanguage: string,
  setCurrencyLanguage: Dispatch<SetStateAction<string>>
}

const Language = ({ currencyLanguage, setCurrencyLanguage }: IProps) => {

  const listLanguage: string[] = ['ENG', 'JP'];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openModal = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const closeModal = () => setAnchorEl(null);
  const changeLang = (language: string) => {
    closeModal();
    if (language !== currencyLanguage) {
      setCurrencyLanguage(language.toUpperCase())
      i18next.changeLanguage(language.toLowerCase())
    }
  }

  return (
    <>
      <Button
        onClick={openModal}
        className="!min-w-0 !ml-auto"
        color="secondary"
        variant="text"
      >
        <LanguageIcon className="text-dark-300" />
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={closeModal}
        onClick={closeModal}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {listLanguage.map((item: string) =>
          <MenuItem
            className={`!mx-2 rounded-md ${currencyLanguage === item ? '!text-light-100' : '!text-light-300'}`}
            sx={{
              backgroundColor: currencyLanguage === item ? 'rgba(31, 41, 55, 0.2)' : '',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: currencyLanguage === item ?
                  'rgba(31, 41, 55, 0.3)' : 'rgba(31, 41, 55, 0.1)',
              }
            }}
            key={item}
            onClick={() => changeLang(item)}
          >{item}</MenuItem>
        )}
      </Menu >
    </>
  )
}

export default Language