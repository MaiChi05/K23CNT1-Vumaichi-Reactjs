import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VmcApp from './VmcApp';
import reportWebVitals from './reportWebVitals';

const Vmcroot = ReactDOM.createRoot(document.getElementById('Vmcroot'));
Vmcroot.render(
  <React.StrictMode>
    <VmcApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
