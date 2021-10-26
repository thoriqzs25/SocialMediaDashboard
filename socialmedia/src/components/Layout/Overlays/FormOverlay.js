import { useState } from "react";

import classes from './FormOverlay.module.css';


const FormOverlay = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState(''); //body
    const postId = props.postId;

    const onChangeHandler = (e) => {
        switch(e.target.name) {
            case 'name':
                return setName(e.target.value)
            case 'email':
                return setEmail(e.target.value)
            case 'comment':
                return setComment(e.target.value)
            default:
                return ;
        }
    }; 

    const onSubmitHandler  = (e) => {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({
            postId: postId,
            id: Math.random(),
            name: name,
            email: email,
            body: comment,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        setName('');
        setEmail('');
        setComment('');
        props.comment();
    };

    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <ul>
                <li>
                    <label>Name: </label><br />
                    <input type='text' name='name' value={name} onChange={onChangeHandler}></input>
                </li>
                <li>
                    <label>Email: </label><br />
                    <input type='text' name='email' value={email} onChange={onChangeHandler}></input>
                </li>
                <li className={classes.comment}>
                    <label>Comment: </label><br />
                    <textarea name='comment' value={comment} onChange={onChangeHandler}></textarea>
                </li>
            </ul>
            <div className={classes.submit}>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default FormOverlay;
