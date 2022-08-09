import React from 'react';
import classes from './Modal.module.css';

const Backdoor = () => {
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const

    Modal = (props) => {
        return <>
            ReactDOM.createPortal(<Backdoor/>, document.getElementById("modal"))
            ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modal"))
        </>

    };

export default Modal;