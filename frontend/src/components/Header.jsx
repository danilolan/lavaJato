import React from 'react';
import './header.css'

import {Link} from 'react-router-dom'

function Header(props) {
    return ( 
        <div className="Header">
            <div className="linkItem">
                <Link to='/'>
                    <i className="fa fa-home"></i>&nbsp;Início
                </Link>
            </div>
            <div className="linkItem">
                <Link to='/addNew'>
                    <i className="fa fa-plus"></i>&nbsp;Adicionar
                </Link>
            </div>
            <div className="linkItem">
                <Link to='/table'>
                    <i className="fa fa-table"></i>&nbsp;Tabela
                </Link>
            </div>
        </div>
     );
}

export default Header;