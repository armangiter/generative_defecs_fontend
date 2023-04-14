import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography, TextField, Select, MenuItem } from '@mui/material'

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
  background: '#374151', borderRadius: '4px', color: 'red', width: '100%',
  '.MuiInputBase-input': { color: '#D1D5DB' }
})

const SelectList = styled(Select)({
  background: '#374151', border: '1px solid #6B7280', borderRadius: '4px', width: '100%',
  '& .MuiSelect-select': { color: '#FFFFFF' },
  '& .MuiSvgIcon-root': { color: '#F9F9F9' },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #484850",
    borderRadius: "5px 5px 0 0"
  }
})

const MenuList = styled(MenuItem)({
  color: '#F9F9F9', '&:hover': { background: 'rgba(116, 122, 139, 0.15)' }
})

const Label = styled(Typography)({ color: '#D1D5DB', fontSize: 14, fontWeight: 500, fontFamily: "Inter" });

export { BorderLinearProgress, Label, Input, SelectList, MenuList }