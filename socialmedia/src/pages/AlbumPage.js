import Album from "../components/UI/AlbumItem/Album";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../components/store/auth-slice";

const AlbumPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.navigate('album'));
    })
    return (
        <div>
           <Album />
        </div>
    );
};

export default AlbumPage;