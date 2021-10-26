import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

import classes from './AlbumItem.module.css';
import PhotoOverlay from '../../Layout/Overlays/AlbumPage/PhotoOverlay';

const AlbumItem = (props) => {
    const dispatch = useDispatch();
    const isModal = useSelector(state => state.modal.isModal);

    const [pickedPhoto, setPickedPhoto] = useState();

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const pickPhoto = (item) => {
        setPickedPhoto(item)
        dispatch(modalActions.openModal('photos'))
    };

    return (
        <div className={classes.container}>
            {isModal && <PhotoOverlay url={pickedPhoto.url} title={pickedPhoto.title}/>}
            {props.photos.map((photo, index) => {
                return (
                    <div className={classes.subcontainer} key={photo.id}>
                        <div className={classes.img} onClick={pickPhoto.bind(null, photo)}>
                            <img src={photo.url} alt={photo.title}/>  
                        </div>
                    </div>
                );
            })}
            <button onClick={scrollUp}>Scroll UP</button>
        </div>
    );
};

    

export default AlbumItem;