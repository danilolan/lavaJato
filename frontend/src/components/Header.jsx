import React from 'react';
import './header.css'

import {Link} from 'react-router-dom'

function Header(props) {
    return ( 
        <div className="Header">
            <div className="linkItem">
                <Link to='/'>
                    <i className="fas fa-home"></i> Inicio
                </Link>
            </div>
            <div className="linkItem">
                <Link to='/addNew'>
                    <i className="fas fa-home"></i> Adicionar
                </Link>
            </div>
            <div className="linkItem">
                <Link to='/table'>
                    <i class="fas fa-home"></i> Tabela
                </Link>
            </div>
        </div>
     );
}

export default Header;