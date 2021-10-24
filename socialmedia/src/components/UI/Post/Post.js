import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";
import classes from './Post.module.css';

const Post = () => {
    const [postsList, setPhotoList] = useState([]);
    const userId = useSelector(state => state.user.userId)

    useEffect(() => {
        const fetchPost = async () => {
            const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postJSON = await getPost.json();

            const postData = [];

            for (const key in postJSON) {
                if((postJSON[key].userId)-1 == userId) {
                    postData.push({
                        userId: postJSON[key].userId,
                        id: key,
                        title: postJSON[key].title,
                        body: postJSON[key].body
                })}
            } 
            setPhotoList(postData)
        };
        fetchPost();
    }, [userId]);
    
    
    return (
        <div className={classes.container}>
            {postsList.slice(0, 3).map((val,index) => {
                return (
                    <div key={val.id} className={classes.subcontainer}>
                        <div className={classes.grid}>
                            <PostItem title={val.title} key={val.id}/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Post;

