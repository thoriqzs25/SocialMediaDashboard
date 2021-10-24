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
                    <>
                        {album.userId === 3 && index%10 === 0 &&
                            <div key={album.id} ref={myRef}>
                                <Card index={index} item={album.title}/>
                            </div>
                        }
                        {album.userId === 3 && index >= (album.userId*10)-9 &&
                            <div key={album.id}>
                                <Card index={index} item={album.title} />
                            </div>
                        }
                    </>)
                })}
                <button onClick={executeScroll}> Click to scroll </button>
            </div>
        </Modal>
    );
};

export default AlbumOverlay;