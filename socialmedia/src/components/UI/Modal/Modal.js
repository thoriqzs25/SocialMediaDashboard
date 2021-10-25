import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ModalBackdrop from './ModalBackdrop';
import OverlayCard from './OverlayCard';
import { useSelector } from 'react-redux';
import OverlayAlbum from './OverlayAlbum';
import OverlayCreate from './OverlayCreate';

const portalElemenet = document.getElementById("overlays");

const Modal = (props) => {
const modalType = useSelector(state => state.modal.type)

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBackdrop />, portalElemenet)}
            {modalType === 'create' && ReactDOM.createPortal(<OverlayCreate>{props.children}</OverlayCreate>, portalElemenet)}
            {modalType === 'post' && ReactDOM.createPortal(<OverlayCard>{props.children}</OverlayCard>, portalElemenet)}
            {modalType === 'postList' && ReactDOM.createPortal(<OverlayAlbum>{props.children}</OverlayAlbum>, portalElemenet)}
            {modalType === 'album' && ReactDOM.createPortal(<OverlayAlbum>{props.children}</OverlayAlbum>, portalElemenet)}
        </Fragment>
    );
};

export default Modal;