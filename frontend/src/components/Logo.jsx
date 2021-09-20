import React from 'react';
import './logo.css'
import logo from '../assets/logo.png'

function Logo(props) {
    return ( 
        <div className="Logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </div>
     );
}

export default Logo;