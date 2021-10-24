import { useState, useEffect, useRef } from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal/Modal";
import classes from './AlbumOverlay.module.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const AlbumOverlay = (props) => {
    const [albumList, setAlbumList] = useState([]);
    const userId = useSelector(state => state.user.userId)
      
    useEffect(() => {
        const fetchAlbum = async () => {
            const getAlbum = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albumJSON = await getAlbum.json();
            
            const albumData = [];
            
            for (const key in albumJSON) {
                if((albumJSON[key].userId)-1 === Number(userId)) {
                    albumData.push({
                        id: albumJSON[key].id,
                        userId: albumJSON[key].userId,
                        title: albumJSON[key].title
                    });
                }
            } 
            setAlbumList(albumData)
        };
        fetchAlbum();
    }, [userId]);

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
                    <Link to={`/albums/${(album.id)}/photos`} key={album.id}>
                        {index === 0 &&
                            <div ref={myRef}>
                                <Card item={album.title}/>
                            </div>
                        }
                        {index >= 1 &&
                            <div>
                                <Card item={album.title} />
                            </div>
                        }
                    </Link>)
                })}
                <button onClick={executeScroll}> Click to scroll </button>
            </div>
        </Modal>
    );
};

export default AlbumOverlay;