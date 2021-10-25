import classes from './FormOverlay.module.css';
import { useState } from "react";


const FormOverlay = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [postId, setPostId] = useState(0);
    const [id, setId] = useState(0);

    const onChangeHandler = (e) => {
        switch(e.target.name) {
            case 'name':
                return setName(e.target.value)
            case 'email':
                return setEmail(e.target.value)
            case 'comment':
                return setComment(e.target.value)
            default:
                return
        }
    }; 

    const onSubmitHandler  = (e) => {
        e.preventDefault();
        console.log(name, email, comment)
    };

    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <ul>
                <li>
                    <label>
                        Name: 
                    </label><br />
                    <input type='text' name='name' value={name} onChange={onChangeHandler}></input>
                </li>
                <li>
                    <label>
                        Email: 
                    </label><br />
                    <input type='text' name='email' value={email} onChange={onChangeHandler}></input>
                </li>
                <li className={classes.comment}>
                    <label>
                        Comment: 
                    </label><br />
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
