import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { App } from './App';
import { GlobalStyle } from './stylesheet/index.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
