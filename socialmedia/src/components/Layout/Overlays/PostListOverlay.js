import Modal from '../../UI/Modal/Modal';
import classes from './PostListOverlay.module.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from '../../store/modal-slice';
import PostListItem from './PostListOverlay/PostListItem';


const PostListOverlay = (props) => {
    const dispatch = useDispatch();
    const [postsList, setPostList] = useState([]);
    const userId = useSelector(state => state.user.userId)

    useEffect(() => {
        const fetchPost = async () => {
            const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postJSON = await getPost.json();

            const postData = [];

            for (const key in postJSON) {
                if((postJSON[key].userId)-1 === Number(userId)) {
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
        console.log(post)
        dispatch(modalActions.switchPostModal({post: post, type: 'post'}))
    }

    return (
        <Modal>
            <div className={classes.container}>
            {postsList.map((post, index) => {
                return (
                        <PostListItem 
                        myRef={myRef} 
                        index={index} 
                        title={post.title} 
                        key={post.id}
                        onPicked={postPickHandler.bind(null, post)}/>
                )
            })}
            <button onClick={executeScroll}> Click to scroll </button>
            </div>
        </Modal>
    );
};

export default PostListOverlay;