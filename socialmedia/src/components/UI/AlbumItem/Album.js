import classes from './Album.module.css';
import AlbumItem from './AlbumItems';
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Album = () => {
    const [photoList, setPhotoList] = useState([]);
    const { iD } = useParams();

    console.log(iD)

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
    }, []);

    console.log(photoList)

    return (
        <div className={classes.container}>
            <AlbumItem photos={photoList}/>
        </div>
    );
};

export default Album;