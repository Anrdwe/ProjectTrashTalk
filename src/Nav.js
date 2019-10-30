import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/" className="nav-style">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="nav-style">
                    <li>About</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav