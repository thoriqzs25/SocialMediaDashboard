import { useState, useEffect, useRef } from "react";
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


    const myRef = useRef();
        
    const executeScroll = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' })
    };

    
    return (
        <Modal>
            <div className={classes.album}>
                {albumList.map((album, index) => {
                    return(
                    <div key={album.id}>
                        {album.userId === 1 && index === 0 &&
                            <div ref={myRef}>
                                <Card>
                                    <p>{index}</p>
                                    <p>{album.title}</p>
                                </Card>
                            </div>
                        }
                        {album.userId === 1 && index >= 1 &&
                            <div>
                                <Card>
                                    <p>{index}</p>
                                    <p>{album.title}</p>
                                </Card>
                            </div>
                        }
                    </div>)
                })}
                <button onClick={executeScroll}> Click to scroll </button>
            </div>
        </Modal>
    );
};

export default AlbumOverlay;