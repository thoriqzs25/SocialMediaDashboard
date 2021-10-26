import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import AlbumItem from './AlbumItems';
import classes from './Album.module.css';

const Album = () => {
    const userId = useSelector(state => state.user.userId)

    const [photoList, setPhotoList] = useState([]);
    const [userName, setUserName] = useState('');
    
    const { iD } = useParams();
    
    const nameFinderId = Math.floor(Number(iD) / 10) + 1
    
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
        
        const fetchUser = async () => {
            const getUser = await fetch('https://jsonplaceholder.typicode.com/users');
            const userJSON = await getUser.json();
            
            let userData = '';
            
            for (const key in userJSON) {
                if(userJSON[key].id === nameFinderId) {
                    userData = userJSON[key].name
                };
            } 
            setUserName(userData)
        };
        fetchPhoto();
        fetchUser();
    }, [iD, nameFinderId]);

    return (
        <div className={classes.container}>
            {userId === -1 && <h3>This is {userName} album's</h3>}
            <AlbumItem photos={photoList}/>
        </div>
    );
};

export default Album;