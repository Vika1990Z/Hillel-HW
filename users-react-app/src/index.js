import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Home from './routes/home'
import UsersRouter from './routes/usersRouter';
import UserDetailesPage from './routes/userDetailesPage';
import Invoices from './routes/invoices';
import Error from './components/Users/Error';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={ <Home />} />
                <Route path="users" element={<UsersRouter />} />
                <Route path="users/:userId" element={<UserDetailesPage />} />  
                <Route path="invoices" element={<Invoices />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);

reportWebVitals();
