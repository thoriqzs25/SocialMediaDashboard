import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { modalActions } from '../../store/modal-slice';

import classes from './EditPost.module.css';

const EditPost = (props) => {
    const postToEdit = props.post
    const dispatch = useDispatch();

    const [body, setBody] = useState(postToEdit.body);
    const [title, setTitle] = useState(postToEdit.title);

    const onChangeHandler = (e) => {
        switch(e.target.name) {
            case 'title':
                return setTitle(e.target.value)
            case 'body':
                return setBody(e.target.value)
            default:
                return
        }
    }; 

    const onSubmitHandler = (e) => {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${postToEdit.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

        props.edit();
    }

    const onDelete = (e) => {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${postToEdit.id}`, {
            method: 'DELETE', 
        })
        console.log(`DELETED POST WITH ID ${postToEdit.id}`)
        dispatch(modalActions.reset())
    };

    return (
        <div>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <ul>
                    <li>
                        <label>
                            Title: 
                        </label><br />
                        <input type='text' name='title' value={title} onChange={onChangeHandler}></input>
                    </li>
                    <li className={classes.body}>
                        <label>
                            Body: 
                        </label><br />
                        <textarea name='body' value={body} onChange={onChangeHandler}></textarea>
                    </li>
                </ul>
                <div className={classes.submit}>
                    <button>Edit</button>
                </div>
            </form><br />
        <button onClick={onDelete}>DELETE BUTTON</button>
        </div>

    );
};

export default EditPost;