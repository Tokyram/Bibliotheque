import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pannier from './Pannier';
import DetailLivre from './DetailLivre';
import Login from './components/Login';
import Payement from './Payement';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pannier" element={<Pannier />} />
          <Route path="/detail/:id" element={<DetailLivre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payement" element={<Payement />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
