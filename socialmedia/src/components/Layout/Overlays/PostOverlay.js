import Modal from "../../UI/Modal/Modal";
import classes from './PostOverlay.module.css';
import { useSelector } from "react-redux";
import Comment from "./Comments/Comment";


const PostOverlay = (props) => {
    const post = useSelector(state => state.modal.post)

    return (
    <Modal>
        <div className={classes.left}>
            {post.title}
        </div>
        <div className={classes.right}>
            <p>{post.body}</p>
            <Comment id={post.id}/>
        </div>
    </Modal>
    );
};

export default PostOverlay;