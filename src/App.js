import React from 'react';
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Customer from './Customer/Customer';

import Booking from './Booking/Booking';
import Services from './Services/Services';
import './Appcss.css';
import Footer from './components/Footer/Footer';
import AddCustomer from './components/AddCustomer/AddCustomer';
import Settings from './Settings/Settings';
const App = () => {
  return (
    <>
  
    <Router>
    <div className="container">
    <div className="d-flex justify-content-between align-items-center p-4">
      
    <Link to="/"><img src={logo} width={78} height={76} alt="All Star Sport" className="img-responsive"></img></Link>
           
    <div >
    <div className="navbar-nav d-flex">
     
    <nav className="navbar navbar-expand-lg navbar-light  p-4 custom-header ">
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
            <li className='nav-item'>
              <Link to="/booking">Booking</Link>
            </li>
            <li className='nav-item'>
              <Link to="/settings">Settings</Link>
            </li>
         
          </ul>
        </nav>

        </div>   
      </div>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/customer" element={<Customer />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
        
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
};

export default App;
