import { Select, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Head = styled(Typography)({ color: '#0F172A', fontSize: 24, fontWeight: 800, marginBottom: 32 });

const Title = styled(Typography)({ color: '#64748B', fontSize: 14, fontWeight: 400 });

const Label = styled(Typography)({ color: '#0F172A', fontSize: 14, fontWeight: 500 });

const Detail = styled(Typography)({ color: '#64748B', fontSize: 12, fontWeight: 400 });

const Input = styled(TextField)({
    color: 'red', height: 44, fontSize: 14, fontWeight: 400, background: '#FFF',
    '.css-2rdet7-MuiInputBase-root-MuiOutlinedInput-root': { height: 44 }
});

const Selector = styled(Select)({
    color: '#0F172A', height: 44, background: '#FFF', border: '1px solid #E2E8F0',
});

export { Head, Title, Label, Selector, Input, Detail };