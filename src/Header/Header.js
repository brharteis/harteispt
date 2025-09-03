import React from "react";
import './Header.css';
import { NavLink, Route, Routes } from "react-router-dom";

import Homepage from '../Homepage/Homepage.js';
import Logo from '../Images/logo4.png';


export default function Header() {
  return (
      <header className="Header">
        <img src={Logo} alt="Blaine's logo" className = "Logo"/>
        
        {/*<p className = "Slogan">Better. Faster. Stronger.</p>*/}
        <nav>
          <NavLink to = "/">
             Home
          </NavLink>
          <NavLink to = "/About">
              About
          </NavLink>
          <NavLink to = "/Services">
              Services
          </NavLink>
          <NavLink to = "/Contact">
              Contact
          </NavLink>
          <NavLink to = "/Gym">
              Gym
          </NavLink>
          <NavLink to = "/Testimonials">
              Testimonials
          </NavLink>
          <NavLink to = "/FAQ">
              FAQ
          </NavLink>
        </nav>

      </header>
  );
}