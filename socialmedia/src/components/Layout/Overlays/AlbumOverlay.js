import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";

import Card from "../../UI/Card";
import Modal from "../../UI/Modal/Modal";
import classes from './AlbumOverlay.module.css';
import { Fragment } from 'react';

const AlbumOverlay = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userId)

    const [albumList, setAlbumList] = useState([]);
      
    useEffect(() => {
        const fetchAlbum = async () => {
            const getAlbum = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albumJSON = await getAlbum.json();
            
            const albumData = [];
            
            for (const key in albumJSON) {
                if(albumJSON[key].userId === Number(userId)) {
                    console.log(albumJSON[key].userId)
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

    const myRef = useRef();
        
    const executeScroll = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' })
    };
    
    const albumPickHanlder = (e) => {
        e.preventDefault();

        dispatch(modalActions.reset());
    };

    return (
        <Modal>
            <div className={classes.album}>
                {userId === -1 && <div className={classes.warning}><p>Please pick a user and then revisit...</p></div>}

                {userId > 0 && <Fragment>
                    {albumList.map((album, index) => {
                        return(
                            <div className={classes.albumitem} onClick={albumPickHanlder}>
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
                                </Link>
                            </div>)
                    })}
                    
                    <div className={classes.albumitem}>
                        <button onClick={executeScroll}> Click to scroll </button>
                    </div>
                </Fragment>}
            </div>
        </Modal>
    );
};

export default AlbumOverlay;