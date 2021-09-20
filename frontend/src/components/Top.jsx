import React from 'react';
import './top.css'
import Logo from './Logo'
import Header from './Header';

function Top(props) {
    return ( 
        <div className="Top">
            <Logo></Logo>
            <Header></Header>
        </div>
     );
}

export default Top;