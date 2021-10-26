import { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice';

import Type1 from "../UI/Types/Type1";
import Type2 from "../UI/Types/Type2";
import Type3 from "../UI/Types/Type3";
import Type4 from "../UI/Types/Type4";
import classes from './Content.module.css';
import PhotoOverlay from './Overlays/AlbumPage/PhotoOverlay';

const Content = () => {
    const dispatch = useDispatch();
    const isModal = useSelector(state => state.modal.isModal)
    const modalType = useSelector(state => state.modal.type)

    const [photoList, setPhotoList] = useState([]);
    const [photoOverlay, setPhotoOverlay] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
                for (const key in photoJSON) {  
                    if (photoJSON[key].id === id) {              
                        photoData.push({
                        albumId: photoJSON[key].albumId,
                        id: photoJSON[key].id,
                        title: photoJSON[key].title,
                        url: photoJSON[key].url
                        });
                    }
                }
            } 
            setPhotoList(photoData);
            setIsLoading(false);
        };
        fetchPhoto();
    }, []);

    if(isLoading) {
        return (<section className='isLoading'><p>LOADING...</p></section>);
    };

    const photoPickHandler = (item) => {
        setPhotoOverlay(item);

        dispatch(modalActions.openModal('photos'));
    };

    return (
        <div className={classes.grid}>

            {isModal && modalType === 'photos' && 
            <PhotoOverlay url={photoOverlay.url} title={photoOverlay.title}/>}

            {photoList.map((photo, index) => {
                return (
                    <Fragment key={photo.id}>
                    {index === 0 && 
                        <div className={classes.satu} onClick={photoPickHandler.bind(null, photo)}> 
                            <Type1>
                                <img src={photo.url} alt='photos' />
                            </Type1>
                        </div>
                    }
                    {index === 1 &&
                        <div className={classes.dua} onClick={photoPickHandler.bind(null, photo)}> 
                            <Type2>
                                <img src={photo.url} alt='photos' />
                            </Type2>
                        </div>
                    }
                    {index === 2 &&
                        <div className={classes.tiga} onClick={photoPickHandler.bind(null, photo)}> 
                            <Type3>
                                <img src={photo.url} alt='photos' />   
                            </Type3>      
                        </div>
                    }
                    {index === 3 &&
                        <div className={classes.empat} onClick={photoPickHandler.bind(null, photo)}> 
                            <Type4>
                                <img src={photo.url} alt='photos' />
                            </Type4>
                        </div>
                    }
                    {index === 4 &&
                        <div className={classes.lima} onClick={photoPickHandler.bind(null, photo)}> 
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