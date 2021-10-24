import classes from './ModalBackdrop.module.css';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const ModalBackdrop = (props) => {
    const dispatch = useDispatch();

    const toggleHanlder = (event) => {
        event.preventDefault();

        dispatch(modalActions.toggle());
    };
    
    return (
        <div className={classes.backdrop} onClick={toggleHanlder}/>
    );
};

export default ModalBackdrop