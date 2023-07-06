import { useState } from "react";
import { Menu, Button, MenuItem } from '@mui/material';
import Lang from "../../../assets/icons/Language";
import i18next from "i18next";

const Language = () => {

    const listLanguage: string[] = ['ENG', 'JP'];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currencyLanguage, setCurrencyLanguage] = useState<string>(i18next.language.toUpperCase());
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
                <Lang />
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
                        className='!mx-2 rounded-md'
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
            </Menu>
        </>
    )
}

export default Language