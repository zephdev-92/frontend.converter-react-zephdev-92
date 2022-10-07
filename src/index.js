import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './reset.css';
import './style.css';

import App from './App';
import CurrenciesList from './Views/CurrenciesList/CurrenciesList';
import Converter from './Views/Converter/Converter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Converter />} />
          <Route path='currencies' element={<CurrenciesList />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '3rem 0' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>

      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

