import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const portalRoot = document.getElementById('portal-root')

const Modal = ({isOpen,children,click}) => {
    if(!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="uiModalOverlay">
            <div className="uiModal">
                <button type="button" className="button" onClick={click}>
                    <i class="fa fa-times"></i>
                </button>
                {children}
            </div>
        </div>,
        portalRoot
    )
}

export default Modal;