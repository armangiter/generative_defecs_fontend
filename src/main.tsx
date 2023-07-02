import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme.ts';

// I18N
import i18n from 'i18next';
import eng from './languages/eng.json'
import jp from './languages/jp.json'
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      eng: {
        translation: eng
      },
      jp: {
        translation: jp
      }
    },
    lng: 'eng',
    fallbackLng: ['eng', 'jp'],
    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
