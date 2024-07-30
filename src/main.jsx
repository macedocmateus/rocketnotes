import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js';

import { AuthProvider } from './hooks/auth.jsx';

import theme from './styles/theme.js';

import { Routes } from './routes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
