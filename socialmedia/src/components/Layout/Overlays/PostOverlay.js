import Modal from "../../UI/Modal/Modal";
import classes from './PostOverlay.module.css';
import Comment from "./Comments/Comment";
import { useSelector } from "react-redux";
import { useState } from "react";
import FormOverlay from "./FormOverlay";


const PostOverlay = (props) => {
    const [addComment, setAddComment] = useState(false);

    const post = useSelector(state => state.modal.post)

    const addCommentHandler = () => {
        setAddComment(true);
    };

    return (
    <Modal>
        <div className={classes.left}>
            {post.title}
        </div>
        <div className={classes.right}>
        {addComment ?  
            <FormOverlay/>
        : 
            <>
                <p>{post.body}</p>
                <button onClick={addCommentHandler}>Add Comment</button>
                <Comment id={post.id}/> 
            </>
        }
        </div> 
    </Modal>
    );
};

export default PostOverlay;