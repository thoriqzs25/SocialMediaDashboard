import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import classes from './Post.module.css';
import { modalActions } from "../../store/modal-slice";

const Post = () => {
    const dispatch = useDispatch();
    const [postsList, setPhotoList] = useState([]);
    const userId = useSelector(state => state.user.userId)
    const name = useSelector(state => state.user.name)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    useEffect(() => {
        const fetchPost = async () => {
            const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postJSON = await getPost.json();

            const postData = [];

            if(name === '') { //kalau belom ada user berarti output random
                for (let i = 0; i < 5; i++) {
                    let id = getRandomInt(100);
                    console.log(id)
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
                        if((postJSON[key].userId)-1 === Number(userId)) {
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
    }, [userId, name]);
    
    const postHandler = (post) => {
        dispatch(modalActions.switchTogglePostModal({post: post, type: 'post'}))
    };
    
    const createHandler = () => {
        console.log("create")
        dispatch(modalActions.switchCreatePost('create'));
    };

    return (
        <div className={classes.container}>
            {postsList.slice(0, 5).map((val,index) => {
                return (
                    <div key={val.id} className={classes.subcontainer}>
                        <div className={classes.grid} onClick={postHandler.bind(null, val)}>
                            <PostItem 
                            title={val.title} 
                            key={val.id}  />
                        </div>
                    </div>
                )
            })}
            <div className={classes.subcontainer} onClick={createHandler}>
                <div className={classes.grid}>
                    <PostItem title='+'/>
                </div>
            </div>
        </div>
    );
};

export default Post;

