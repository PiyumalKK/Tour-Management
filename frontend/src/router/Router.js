import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';


 export const Router = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/tours/search" element={<SearchResultList/>} />
    <Route path="/tours" element={<Tours/>} />
    <Route path="/tours/:id" element={<TourDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router;