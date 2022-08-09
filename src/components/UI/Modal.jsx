import React from 'react';
import classes from './Modal.module.css';

const Backdoor = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const

    Modal = (props) => {
        return <>
            ReactDOM.createPortal(<Backdoor onClose={props.onClose}/>, document.getElementById("modal"))
            ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modal"))
        </>

    };

export default Modal;