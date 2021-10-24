import Modal from "../../UI/Modal/Modal";
import classes from './PostOverlay.module.css';
const PostOverlay = (props) => {
    return (
    <Modal>
        <div className={classes.left}></div>
        <div className={classes.right}></div>
    </Modal>
    );
};

export default PostOverlay;