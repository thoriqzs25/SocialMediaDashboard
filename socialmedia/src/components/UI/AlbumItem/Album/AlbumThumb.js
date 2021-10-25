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
    
    const albumPickHanlder = (e) => {
        e.preventDefault();

        dispatch(modalActions.toggle());
    };
    
    return (
        <div className={classes.container}>
            {albumList.slice(0, 6).map((album, index) => {
            return(
                <div key={album.id} className={classes.subcontainer}>
                    <div className={classes.grid} onClick={albumPickHanlder} >
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