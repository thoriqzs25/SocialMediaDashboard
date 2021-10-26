import { useParams } from "react-router";
import { useState, useEffect } from "react";

import AlbumItem from './AlbumItems';
import classes from './Album.module.css';

const Album = () => {
    const [photoList, setPhotoList] = useState([]);
    const { iD } = useParams();

    useEffect(() => {
        const fetchPhoto = async () => {
            const getPhoto = await fetch(`https://jsonplaceholder.typicode.com/albums/${iD}/photos`);
            const photoJSON = await getPhoto.json();
            const photoData = [];

            for (const key in photoJSON) {                
                photoData.push({
                    albumId: photoJSON[key].albumId,
                    id: key,
                    title: photoJSON[key].title,
                    url: photoJSON[key].url
                });
            } 
            setPhotoList(photoData)
        };
        fetchPhoto();
    }, [iD]);

    return (
        <div className={classes.container}>
            <AlbumItem photos={photoList}/>
        </div>
    );
};

export default Album;