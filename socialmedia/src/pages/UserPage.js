import { useDispatch } from "react-redux";
import { modalActions } from "../components/store/modal-slice";

const UserPage = () => {
    const dispatch = useDispatch();

    const toggleHandler = (event) => {
        event.preventDefault();

        dispatch(modalActions.toggle());
    };

    return (
    <div>
        <button onClick={toggleHandler}>
            post test
        </button>
    </div>
    );
};

export default UserPage;