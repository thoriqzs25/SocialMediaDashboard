import { useDispatch } from "react-redux";
import { modalActions } from "../components/store/modal-slice";
import Post from "../components/UI/Post/Post";
import classes from './UserPage.module.css';

const UserPage = () => {
    const dispatch = useDispatch();

    const togglePostListHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.togglePostListModal());
    };

    const toggleAlbumHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.toggleAlbumModal());
    };

    return (
    <div className={classes.container}>
        <p>Posts</p>
        <Post />
        <div className={classes.buttoncont}>
            <button onClick={togglePostListHandler}>
                Show more post
            </button>
        </div>
        <p>Album</p>
        <div><p>album</p></div>
        <div className={classes.buttoncont}>
            <button onClick={toggleAlbumHandler}>
                album test
            </button>
        </div>
    </div>
    );
};

export default UserPage;