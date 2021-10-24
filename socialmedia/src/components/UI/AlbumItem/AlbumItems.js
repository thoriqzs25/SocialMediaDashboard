import { useParams } from "react-router";
import Card from "../Card";
import classes from './AlbumItem.module.css';
import { useState, useEffect } from "react";

const AlbumItem = () => {
    const [photoList, setPhotoList] = useState([]);
    const { iD } = useParams();

    useEffect(() => {
        const fetchPhoto = async () => {
            const getPhoto = await fetch(`/albums/${iD}/photos`);
            const photoJSON = await getPhoto.json();
    
            const photoData = [];

            for (const key in photoJSON) {
                photoData.push({
                    id: key,
                    url: photoJSON[key].url
                });
            } 
            setPhotoList(photoData)
        };
        fetchPhoto();
    }, []);
    
    
    return (
        <div>
            {photoList.map((photo, index) => {
                return (
                    <div className={classes.container}>
                        <Card img={photo.url} />
                    </div>
                );
            })}
        </div>
    );
};

    

export default AlbumItem;