import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import classes from './AlbumThumb.module.css';
import AlbumThumbItem from './AlbumThumbItem';

const AlbumThumb = () => {
    const userId = useSelector(state => state.user.userId);

    const [albumList, setAlbumList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
      
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
                        if((albumJSON[key].id) === id) {
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
                    if((albumJSON[key].userId) === Number(userId)) {
                        albumData.push({
                            id: albumJSON[key].id,
                            userId: albumJSON[key].userId,
                            title: albumJSON[key].title
                        });
                    }
                } 
            }
            setAlbumList(albumData);
            setIsLoading(false);
        };
        fetchAlbum();
    }, [userId]);

    if(isLoading) {
        return (<section className='isLoading'><p>LOADING...</p></section>);
    };
    
    return (
        <div className={classes.container}>
            {albumList.slice(0, 6).map((album, index) => {
            return(
                <div key={index} className={classes.subcontainer}>
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