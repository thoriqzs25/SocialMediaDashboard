import { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import classes from './AlbumOverlay.module.css';

const AlbumOverlay = (props) => {
    const [albumList, setAlbumList] = useState([]);

    // useEffect(() => {
    //     const fetchAlbum = async () => {
    //         const getUser = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const userJSON = await getUser.json();
    
    //         const userData = [];

    //         for (const key in userJSON) {
    //             userData.push({
    //                 id: key,
    //                 name: userJSON[key].name,
    //                 username: userJSON[key].username,
    //                 email: userJSON[key].email
    //             });
    //         } 
    //         setUserList(userData)
    //     };
    //     fetchUser();
    // }, []);
    
    return (
        <Modal>
            <div className={classes.album}></div>
        </Modal>
    );
};

export default AlbumOverlay;