import { useDispatch } from "react-redux";
import { modalActions } from "../components/store/modal-slice";

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
    <div>
        <button onClick={togglePostHandler}>
            post test
        </button>
        <button onClick={toggleAlbumHandler}>
            album test
        </button>
    </div>
    );
};

export default UserPage;