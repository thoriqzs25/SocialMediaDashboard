import Modal from "../../../UI/Modal/Modal";
import classes from './PhotoOverlay.module.css';
import { useSelector } from "react-redux";

const PhotoOverlay = (props) => {
    const isModal = useSelector(state => state.modal.isModal)
    
    return (
        <Modal>
            <div className={classes.left}>
                <img src={props.url} alt={props.title}/>
            </div>
            <div className={classes.right}>
                <p>{props.title}</p>
            </div>
        </Modal>
    );
};

export default PhotoOverlay