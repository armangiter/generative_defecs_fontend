import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography, TextField, Select, MenuItem, Button } from '@mui/material'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#111827',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#FEF08A',
    opacity: 0.9,
  },
}));

const Input = styled(TextField)({
  background: '#FFFFFF', borderRadius: '4px', color: '#2C2E36', width: '100%',
  '.MuiInputBase-input': { color: '#374151' }
})

const SelectList = styled(Select)({
  background: '#FFFFFF', color: '#2C2E36 !important', border: 'none', outline: 'none', borderRadius: '4px', width: '100%',
  '& .MuiSelect-select': { color: '#2C2E36' },
  '& .MuiSvgIcon-root': { color: '#2C2E36' },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #484850",
    borderRadius: "5px 5px 0 0"
  }
})

const MenuList = styled(MenuItem)({
  color: '#2C2E36', '&:hover': { background: 'rgba(116, 122, 139, 0.15)' }
})

const Label = styled(Typography)({ color: '#374151', fontSize: 14, fontWeight: 500, fontFamily: "Inter" });

const ButtonDate = styled(Button)({ background: '#FFFFFF', height: 40, borderRadius: 6, ":hover": { background: '#f8f8f8' } })

export { BorderLinearProgress, Label, Input, SelectList, MenuList, ButtonDate }