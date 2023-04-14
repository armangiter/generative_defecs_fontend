import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from "@mui/material/styles";
import theme from './mui/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)