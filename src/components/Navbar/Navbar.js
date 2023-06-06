import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../Home/Home';
import Customer from '../../Customer/Customer';
const Navbar = () => {
  return (

    
    <Router>
    <div class="collapse navbar-collapse pull-right" id="navbarNavAltMarkup">
    <div class="navbar-nav pull-right d-flex justify-content-between align-items-center">
        <nav className='d-flex justify-content-around align-items-center'>
          <ul className='navbar-nav gap-3 pl-4'>
            <li className='nav-item active'>
              <Link to="/">Home</Link>
            </li>
          
            <li className='nav-item'>
              <Link to="/customer">Customer</Link>
            </li>
            <li className='nav-item'>
              <Link to="/services">Services</Link>
            </li>
         
          </ul>
        </nav>
        
    </div>
  </div>

      
    
  </Router>

  );
};

export default Navbar;
