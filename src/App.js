import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";

import Header from './Header/Header.js';  
import Footer from './Footer/Footer.js';
import Homepage from './Homepage/Homepage.js';
import About from './About/About.js';
import Services from './Services/Services.js';
import Contact from './Contact/Contact.js';
import Gym from './Gym/Gym.js';
import Testimonials from './Testimonials/Testimonials.js';
import FAQ from './FAQ/FAQ.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element={<Homepage />} />
        <Route path = "/About" element={<About />} />
        <Route path = "/Services" element={<Services />} />
        <Route path = "/Contact" element={<Contact />} />
        <Route path = "/Gym" element={<Gym />} />
        <Route path = "/Testimonials" element={<Testimonials />} />
        <Route path = "/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;