import { useState, useEffect, useRef } from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal/Modal";
import classes from './AlbumOverlay.module.css';
import { useSelector } from "react-redux";

const AlbumOverlay = (props) => {
    const [albumList, setAlbumList] = useState([]);
    const userId = useSelector(state => state.user.userId)
     
    useEffect(() => {
        const fetchAlbum = async () => {
            const getAlbum = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albumJSON = await getAlbum.json();
            
            const albumData = [];
            
            for (const key in albumJSON) {
                if((albumJSON[key].userId)-1 == userId) {
                    albumData.push({
                        id: key,
                        userId: albumJSON[key].userId,
                        title: albumJSON[key].title
                    });
                }
            } 
            setAlbumList(albumData)
        };
        fetchAlbum();
    }, []);

    console.log(albumList)

    const myRef = useRef();
        
    const executeScroll = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' })
    };
    
    return (
        <Modal>
            <div className={classes.album}>
                {albumList.map((album, index) => {
                    return(
                    <div>
                        {index === 0 &&
                            <div key={album.id} ref={myRef}>
                                <Card item={album.title}/>
                            </div>
                        }
                        {index >= 1 &&
                            <div key={album.id}>
                                <Card item={album.title} />
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