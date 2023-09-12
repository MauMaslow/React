import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppVideo from './componentes/AppVideo';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root_video'));
root.render(
  <React.StrictMode>
    <AppVideo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
