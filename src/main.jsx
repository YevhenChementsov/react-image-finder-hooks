import React from 'react';

import App from '@/components/App/App';
import { GlobalStyle } from '@/constants/GlobalStyle';
import { theme } from '@/constants/theme';
import ContextProvider from '@/contexts/Provider';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
);
