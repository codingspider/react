import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../components/Home';
import Service from '../components/Service';
import About from '../components/About';
import Protfolio from '../components/Protfolio';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

class Header extends React.Component {
    state = {  } 
    render() { 
        return (
            <Router>
            <div>
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                    <div className="logo me-auto">
                        <h1><a href="index.html">Scaffold</a></h1>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link className="nav-link scrollto" to="/about">About Us</Link></li>
                        <li><Link className="nav-link scrollto" to="/service">Service </Link></li>
                        <li><Link className="nav-link scrollto" to="/portfolio">Portfolio</Link></li>
                        <li><Link className="nav-link scrollto" to="/pricing">Pricing</Link></li>
                        <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div className="header-social-links d-flex align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </header>
            </div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/portfolio" element={<Protfolio />}></Route>
                    <Route path="/pricing" element={<Pricing />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </Router>
        );
    }
}
 
export default Header;