import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import ModalBackdrop from './ModalBackdrop';
import OverlayCard from './OverlayCard';

const portalElemenet = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBackdrop />, portalElemenet)}
            {ReactDOM.createPortal(<OverlayCard>{props.children}</OverlayCard>, portalElemenet)}
        </Fragment>
    );
};

export default Modal;