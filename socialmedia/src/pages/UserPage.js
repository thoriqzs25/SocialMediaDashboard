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
        <button onClick={togglePostListHandler}>
            Show more post
        </button>
        <Post />
        <button onClick={toggleAlbumHandler}>
            album test
        </button>
        <div><p>album</p></div>
    </div>
    );
};

export default UserPage;