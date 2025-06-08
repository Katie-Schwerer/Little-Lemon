import React from 'react';
import logo from '../Media/logo.jpg'; // Adjust the path as necessary
import '../Style/Nav.css';
import { Link } from "react-router-dom"; // Assuming you have a CSS file for styling

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Little Lemon Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;