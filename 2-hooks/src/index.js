import React from 'react';
import ReactDOM from 'react-dom/client';
import { UseCallBack } from './hooks/UseCallBack';
import './styles/global-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseCallBack />
  </React.StrictMode>
);
