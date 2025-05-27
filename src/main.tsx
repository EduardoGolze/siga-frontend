import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { TemaProvider } from './contexts/TemaContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TemaProvider>
          <App />
        </TemaProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);