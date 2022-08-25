import React from 'react';
import ReactDOM from 'react-dom/client';
import LoadPosts from './hooks/UseRef/LoadPosts';
import './styles/global-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadPosts />
  </React.StrictMode>
);
