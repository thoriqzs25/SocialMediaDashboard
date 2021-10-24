import { useState, useEffect } from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal/Modal";
import classes from './AlbumOverlay.module.css';

const AlbumOverlay = (props) => {
    const [albumList, setAlbumList] = useState([]);

    useEffect(() => {
        const fetchAlbum = async () => {
            const getAlbum = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albumJSON = await getAlbum.json();
    
            const albumData = [];

            for (const key in albumJSON) {
                albumData.push({
                    id: key,
                    userId: albumJSON[key].userId,
                    title: albumJSON[key].title
                });
            } 
            setAlbumList(albumData)
        };
        fetchAlbum();
    }, []);
    
    return (
        <Modal>
            <div className={classes.album}>
                {albumList.map((album, index) => {
                    return(
                    <>
                    {album.userId === 1 && 
                    <Card>
                        <p>index</p>
                        <p>{album.title}</p>
                    </Card>}
                    </>)
                })}
            </div>
        </Modal>
    );
};

export default AlbumOverlay;