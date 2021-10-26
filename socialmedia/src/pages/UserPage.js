import { useDispatch } from "react-redux";
import { modalActions } from "../components/store/modal-slice";

import classes from './UserPage.module.css';
import Post from "../components/UI/Post/Post";
import AlbumThumb from "../components/UI/AlbumItem/Album/AlbumThumb";

const UserPage = () => {
    const dispatch = useDispatch();

    const togglePostListHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.openModal('postList'));
    };

    const toggleAlbumHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.openModal('album'));
    };

    return (
    <div className={classes.container}>
        <h3>Posts</h3>
        <Post />
        <div className={classes.buttoncont}>
            <button onClick={togglePostListHandler}>
                Show more post
            </button>
        </div>
        <h3>Album</h3>
        <AlbumThumb />
        <div className={classes.buttoncont}>
            <button onClick={toggleAlbumHandler}>
                album test
            </button>
        </div>
    </div>
    );
};

export default UserPage;