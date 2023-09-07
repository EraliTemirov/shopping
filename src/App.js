import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/shop' element={<ShopPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
        </Routes>
         <Footer/>
      </Router>
  );
}

export default App;
