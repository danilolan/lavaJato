import React from 'react';
import './navItem.css'
import {Link} from 'react-router-dom'

function NavItem(props) {
    return ( 
    <div className="NavItem">
        <Link to={props.href}>
            <i className={props.icon}></i> {props.label}
        </Link>
    </div> );
}

export default NavItem;