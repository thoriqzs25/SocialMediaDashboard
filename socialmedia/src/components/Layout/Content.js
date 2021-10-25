import classes from './Content.module.css';
import Type1 from "../UI/Types/Type1";
import Type2 from "../UI/Types/Type2";
import Type3 from "../UI/Types/Type3";
import Type4 from "../UI/Types/Type4";
import { useEffect, useState } from 'react';
import { Fragment } from 'react';

const Content = () => {
    const [photoList, setPhotoList] = useState([]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    useEffect(() => {
        const fetchPhoto = async () => {
            const getPhoto = await fetch(`https://jsonplaceholder.typicode.com/photos`);
            const photoJSON = await getPhoto.json();
            const photoData = [];

            for (let i = 0; i < 5; i++) {
                let id = getRandomInt(5000);
                console.log(id)
                for (const key in photoJSON) {  
                    if (photoJSON[key].id === id) {              
                        console.log('masuk')
                        photoData.push({
                        albumId: photoJSON[key].albumId,
                        id: photoJSON[key].id,
                        title: photoJSON[key].title,
                        url: photoJSON[key].url
                        });
                    }
                }
            } 
            setPhotoList(photoData)
        };
        fetchPhoto();
    }, []);

    console.log(photoList)

    return (
        <div className={classes.grid}>
            {photoList.map((photo, index) => {
                return (
                    <Fragment key={photo.id}>
                    {index === 0 && 
                        <div className={classes.satu}> 
                            <Type1>
                                <img src={photo.url} alt='photos' />
                            </Type1>
                        </div>
                    }
                    {index === 1 &&
                        <div className={classes.dua}> 
                            <Type2>
                                <img src={photo.url} alt='photos' />
                            </Type2>
                        </div>
                    }
                    {index === 2 &&
                        <div className={classes.tiga}> 
                            <Type3>
                                <img src={photo.url} alt='photos' />   
                            </Type3>      
                        </div>
                    }
                    {index === 3 &&
                        <div className={classes.empat}> 
                            <Type4>
                                <img src={photo.url} alt='photos' />
                            </Type4>
                        </div>
                    }
                    {index === 4 &&
                        <div className={classes.lima}> 
                            <Type1>
                                <img src={photo.url} alt='photos' />
                            </Type1>
                        </div>
                    }
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Content;