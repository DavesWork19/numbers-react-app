import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import HomeScreen from './HomeScreen';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import NoPage from './NoPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/level-1" element={<Level1 />} />
        <Route path="/level-2" element={<Level2 />} />
        <Route path="/level-3" element={<Level3 />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
