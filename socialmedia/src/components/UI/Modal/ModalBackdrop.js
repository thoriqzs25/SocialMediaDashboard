import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

import classes from './ModalBackdrop.module.css';

const ModalBackdrop = () => {
    const dispatch = useDispatch();

    const toggleHanlder = (event) => {
        event.preventDefault();

        dispatch(modalActions.toggle())
    };
    
    return (
        <div className={classes.backdrop} onClick={toggleHanlder}/>
    );
};

export default ModalBackdrop;