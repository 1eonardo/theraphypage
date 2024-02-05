import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Description from './components/Description/Description';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Login from './components/Login/Login';

const App = () => {
  return (
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<section id="home"><Home /><About /><Description /><Contact /></section>} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
