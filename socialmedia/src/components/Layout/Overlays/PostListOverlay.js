import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef, Fragment } from 'react';
import { modalActions } from '../../store/modal-slice';

import Modal from '../../UI/Modal/Modal';
import classes from './PostListOverlay.module.css';
import PostListItem from './PostListOverlay/PostListItem';


const PostListOverlay = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userId)

    const [postsList, setPostList] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postJSON = await getPost.json();

            const postData = [];

            for (const key in postJSON) {
                if(postJSON[key].userId === Number(userId)) {
                    postData.push({
                        userId: postJSON[key].userId,
                        id: postJSON[key].id,
                        title: postJSON[key].title,
                        body: postJSON[key].body
                })}
            } 
            setPostList(postData)
        };
        fetchPost();
    }, [userId]);

    const myRef = useRef();
        
    const executeScroll = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' })
    };

    const postPickHandler = (post) => {
        dispatch(modalActions.switch({post: post, type: 'post'}));
    };

    return (
        <Modal>
            <div className={classes.container}>
                {userId === -1 && <p>Please pick a user and then revisit...</p>}

                {userId > 0 && 
                <Fragment>
                    {postsList.map((post, index) => {
                        return (
                            <div className={classes.subcontainer}>
                                <PostListItem 
                                myRef={myRef} 
                                index={index} 
                                title={post.title} 
                                key={post.id}
                                onPicked={postPickHandler.bind(null, post)}/>
                            </div>
                        )
                    })}
                    
                    <div className={classes.subcontainer}>
                        <button onClick={executeScroll}> Click to scroll </button>
                    </div>
                </Fragment>}
            </div>
        </Modal>
    );
};

export default PostListOverlay;