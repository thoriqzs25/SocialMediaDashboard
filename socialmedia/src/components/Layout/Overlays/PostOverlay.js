import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import EditPost from "./EditPost";
import FormOverlay from "./FormOverlay";
import Comment from "./Comments/Comment";
import Modal from "../../UI/Modal/Modal";
import dot from '../../../assets/3dot.png';
import classes from './PostOverlay.module.css';


const PostOverlay = () => {
    const post = useSelector(state => state.modal.post)

    const [addComment, setAddComment] = useState(false);
    const [editPost, setEditPost] = useState(false);


    const doneHandler = () => {
        setAddComment(false);
        setEditPost(false);
    };

    const addCommentHandler = () => {
        setAddComment(true);
    };

    const editPostHandler = () => {
        setEditPost(true);
    };

    return (
    <Modal>
        <div className={classes.left}>
            {post.title}
        </div>
        <div className={classes.right}>

        {addComment &&  
            <FormOverlay userId={post.id} comment={doneHandler}/>
        }

        {editPost &&
            <EditPost post={post} edit={doneHandler}/>
        }

        {!addComment && !editPost &&
            <Fragment>
                <div className={classes.edit}>
                    <img src={dot} alt='3_dot_edit' onClick={editPostHandler}/>
                </div>
                <div className={classes.body}>
                    <p>{post.body}</p>
                </div>
                <button onClick={addCommentHandler}>Add Comment</button>
                <Comment id={post.id}/> 
            </Fragment>
        } 

        </div> 
    </Modal>
    );
};

export default PostOverlay;