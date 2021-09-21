import React from 'react';
import "./footer.css"

function Footer(props) {
    return ( 
    <footer className="footer">
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger"></i> por
            <strong> Danilo<span className="text-danger">H</span>erc</strong> 
        </span>
    </footer> );
}

export default Footer;