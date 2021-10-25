import classes from './EditPost.module.css';
import { useState } from 'react';

const EditPost = (props) => {
    const postToEdit = props.post

    const [title, setTitle] = useState(postToEdit.title);
    const [body, setBody] = useState(postToEdit.body);

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

    const onSubmitHandler  = (e) => {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${postToEdit.id}`, {
            method: 'PUT',
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
            </form>
        <button>DELETE BUTTON</button>
        </div>

    );
};

export default EditPost;