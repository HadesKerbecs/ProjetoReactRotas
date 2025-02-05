import React from 'react';
import 'normalize.css';
import './index.css';
import Router from './routes';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
