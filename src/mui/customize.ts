import { Select, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Head = styled(Typography)({ color: '#0F172A', fontSize: 24, fontWeight: 800, marginBottom: 32 });

const Title = styled(Typography)({ color: '#64748B', fontSize: 14, fontWeight: 400 });

const Label = styled(Typography)({ color: '#0F172A', fontSize: 14, fontWeight: 500 });

const Detail = styled(Typography)({ color: '#64748B', fontSize: 12, fontWeight: 400 });

const Caption = styled(Typography)({ color: '#6B7280', fontSize: 16, fontWeight: 400 });

const Input = styled(TextField)({
    color: 'red', height: 44, fontSize: 14, fontWeight: 400, background: '#FFF',
    '.css-2rdet7-MuiInputBase-root-MuiOutlinedInput-root': { height: 44 }
});

const Selector = styled(Select)({
    color: '#0F172A', height: 44, background: '#FFF', border: '1px solid #E2E8F0',
});

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#64748B',
    transition: '0.3s all',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#4e5763',
    },
});

export { Head, Title, Label, Selector, Input, Detail, Caption, BpIcon, BpCheckedIcon };