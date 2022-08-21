import React from 'react';
import ReactDOM from 'react-dom/client';
import { UseState } from './hooks/UseState';
import './styles/global-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseState />
  </React.StrictMode>
);
