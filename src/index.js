import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from '../src/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import CVV from './components/cvv';
import Acercade from './components/acercade';
import './config/i18next'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cvv" element={<CVV />} />
      <Route path="/acercade" element={<Acercade />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
