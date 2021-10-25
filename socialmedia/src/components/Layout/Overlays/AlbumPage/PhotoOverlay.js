import Modal from "../../../UI/Modal/Modal";
import classes from './PhotoOverlay.module.css';

const PhotoOverlay = (props) => {    
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