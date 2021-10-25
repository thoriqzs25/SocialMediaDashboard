import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from './Comment.module.css';

const Comment = (props) => {
    const [comments, setComments] = useState([]);
    const postId = props.id    

    useEffect(() => {
        const fetchComments = async () => {
            const getComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const commentJSON = await getComment.json();

            const commentData = [];

            for (const key in commentJSON) {
                commentData.push({
                    postId: commentJSON[key].postId,
                    id: commentJSON[key].id,
                    title: commentJSON[key].name,
                    email: commentJSON[key].email,
                    body: commentJSON[key].body
                })
            } 
            setComments(commentData)
        };
        fetchComments();
    }, [postId]);

    return (
        <div className={classes.container}>
            {comments.map((com, index) => {
                return (
                    <div className={classes.comment} key={com.id}>
                        <div className={classes.identity}>
                            <p>Name: {com.name}</p>
                            <p>Email: {com.email}</p>
                        </div>
                        <p> --{'>'} {com.body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Comment;