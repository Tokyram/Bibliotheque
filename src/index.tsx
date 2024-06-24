import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Pannier from './Pannier';
import Historique from './Historique';
import DetailLivre from './DetailLivre';
import Login from './components/Login';
import Payement from './Payement';
import ProtectedRoute from './ProtectedRoute';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><App /></ProtectedRoute>} />
          <Route path="/panier" element={<ProtectedRoute><Pannier /></ProtectedRoute>} />
          <Route path="/historique" element={<ProtectedRoute><Historique /></ProtectedRoute>} />
          <Route path="/detail/:id" element={<ProtectedRoute><DetailLivre /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/paiement" element={<ProtectedRoute><Payement /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
