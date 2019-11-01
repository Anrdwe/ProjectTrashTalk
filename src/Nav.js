import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <header>
        <img class="logo" src="./TrashTalk.svg" alt="logo"/>
        <nav>
            <ul className="nav-links">
                <Link to="/" className="nav-style">
                    <li>Home</li>
                </Link>
                <Link to="/board" className="nav-style">
                    <li>Board</li>
                </Link>
                <Link to="/about" className="nav-style">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
        <Link to="/contact" className="cta">
            <button>Contact</button>
        </Link>
        </header>
    )
}

export default Nav