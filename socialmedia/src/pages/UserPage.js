import { useDispatch } from "react-redux";
import { modalActions } from "../components/store/modal-slice";
import classes from './UserPage.module.css';

const UserPage = () => {
    const dispatch = useDispatch();

    const togglePostHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.togglePostModal());
    };

    const toggleAlbumHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.toggleAlbumModal());
    };

    return (
    <div className={classes.container}>
        <div onClick={togglePostHandler}>
            post test
        </div>
        <button onClick={toggleAlbumHandler}>
            album test
        </button>
    </div>
    );
};

export default UserPage;