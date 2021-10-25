import { useEffect, useState } from 'react';
import classes from './AlbumThumb.module.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { modalActions } from '../../../store/modal-slice';
import AlbumThumbItem from './AlbumThumbItem';

const AlbumThumb = (props) => {
    const dispatch = useDispatch();
    const [albumList, setAlbumList] = useState([]);
    const userId = useSelector(state => state.user.userId)
      
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    useEffect(() => {
        const fetchAlbum = async () => {
            const getAlbum = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albumJSON = await getAlbum.json();
            
            const albumData = [];
            
            if(userId === -1){
                for (let i = 0; i < 6; i++) {
                    let id = getRandomInt(100);
                    for (const key in albumJSON) {
                        if((albumJSON[key].id)-1 === id) {
                            albumData.push({
                                id: albumJSON[key].id,
                                userId: albumJSON[key].userId,
                                title: albumJSON[key].title
                            });
                        }
                    } 
                }
            }
            else {
                for (const key in albumJSON) {
                    if((albumJSON[key].userId)-1 === Number(userId)) {
                        console.log('masuk')
                        albumData.push({
                            id: albumJSON[key].id,
                            userId: albumJSON[key].userId,
                            title: albumJSON[key].title
                        });
                    }
                } 
            }
            setAlbumList(albumData)
        };
        fetchAlbum();
    }, [userId]);

    
    return (
        <div className={classes.container}>
            {albumList.slice(0, 6).map((album, index) => {
            return(
                <div key={album.id} className={classes.subcontainer}>
                    <div className={classes.grid}>
                        <Link to={`/albums/${(album.id)}/photos`}>
                            <AlbumThumbItem title={album.title}/>
                        </Link>
                    </div>
                </div>)
            })}
        </div>
    );
};

export default AlbumThumb;