import Modal from "../../../UI/Modal/Modal";
import classes from './CreateOverlay.module.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store/modal-slice";

const CreateOverlay = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const userId = useSelector(state => state.user.userId)
    
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

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                id: Math.random(),
                title: title,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

        dispatch(modalActions.toggle())
    };

    return (
        <Modal>
            <div className={classes.container}>
                <form className={classes.subcontainer} onSubmit={handleSubmit}>
                    <label>Title: </label><br/>
                    <input name='title' value={title} onChange={onChangeHandler}></input><br/>
                    <label>Caption: </label><br/>
                    <textarea name='body' value={body} onChange={onChangeHandler}></textarea>
                    <button>ADD POST!</button>
                </form>
            </div>
        </Modal>
    );
};

export default CreateOverlay;