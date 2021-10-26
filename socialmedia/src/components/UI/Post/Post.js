import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

import PostItem from "./PostItem";
import classes from './Post.module.css';

const Post = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userId);
    console.log(userId)

    const [postsList, setPhotoList] = useState([]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    useEffect(() => {
        const fetchPost = async () => {
            const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postJSON = await getPost.json();

            const postData = [];

            if(userId === -1) { //kalau belom ada user berarti output random
                for (let i = 0; i < 5; i++) {
                    let id = getRandomInt(100);
                    for (const key in postJSON) {  
                        if (postJSON[key].id === id) {              
                            postData.push({
                                userId: postJSON[key].userId,
                                id: postJSON[key].id,
                                title: postJSON[key].title,
                                body: postJSON[key].body
                            });
                        }
                    }
                }
            } 
            else {
                for (let i = 0; i < 5; i++) {
                    for (const key in postJSON) {
                        if(postJSON[key].userId === Number(userId)) {
                            postData.push({
                                userId: postJSON[key].userId,
                                id: postJSON[key].id,
                                title: postJSON[key].title,
                                body: postJSON[key].body
                            })
                        }
                    }
                }
            }
            setPhotoList(postData)
        };
        fetchPost();
    }, [userId]);
    
    const postHandler = (post) => {
        dispatch(modalActions.switch({post: post, type: 'post'}))
        dispatch(modalActions.toggle());
    };
    
    const createHandler = () => {
        dispatch(modalActions.openModal('create'));
    };

    return (
        <div className={classes.container}>
            {postsList.slice(0, 5).map((val,index) => {
                return (
                    <div key={index} className={classes.subcontainer}>
                        <div className={classes.grid} onClick={postHandler.bind(null, val)}>
                            <PostItem 
                            title={val.title} 
                            key={val.id}  />
                        </div>
                    </div>
                )
            })}
            <div className={classes.subcontainer} onClick={createHandler}>
                <div className={classes.grid} >
                    <PostItem title='+'/>
                </div>
            </div>
        </div>
    );
};

export default Post;

