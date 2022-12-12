import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App'
import Home from './pages/home';
import MovieDetails from './pages/details';
import Search from './pages/search';
import NotFound from './pages/notFound';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home /> } />
        <Route path="/details/:movieId" element={<MovieDetails />} />
        <Route path="/search/:query" element={<Search />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);



