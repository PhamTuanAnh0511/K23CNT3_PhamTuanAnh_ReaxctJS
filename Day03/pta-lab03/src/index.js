import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PtaApp from './PtaApp';
import reportWebVitals from './reportWebVitals';

const ptaroot = ReactDOM.createRoot(document.getElementById('ptaroot'));
ptaroot.render(
  <React.StrictMode>
    <PtaApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
