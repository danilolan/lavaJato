import React from 'react';
import './confMessage.css'

function ConfMessage(props) {
    return ( 
        <div className="ConfMessage">
            Placa {props.placa} cadastrada com sucesso!
            <button onClick={props.click}><i className="fa fa-window-close"></i></button>
        </div>
     );
}

export default ConfMessage;