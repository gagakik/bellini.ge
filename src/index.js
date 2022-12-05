import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import About from './pages/About';
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Header from './components/Header';
import Bg from './components/Bg';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Navbar/>
  <Bg/>
  <Routes>
    <Route element={<Home/>} path='/' exact="true"/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Services/>} path='/services'/>
    <Route element={<Pricing/>} path='/pricing'/>
    <Route element={<Gallery/>} path='/gallery'/>
    <Route element={<Team/>} path='/team'/>
    <Route element={<Blog/>} path='/blog'/>
  </Routes>
  <Footer/>
  </BrowserRouter>

);

