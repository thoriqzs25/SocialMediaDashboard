import { useState } from 'react';
import classes from './AlbumItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-slice';
import PhotoOverlay from '../../Layout/Overlays/AlbumPage/PhotoOverlay';

const AlbumItem = (props) => {
    const isModal = useSelector(state => state.modal.isModal)
    const [pickedPhoto, setPickedPhoto] = useState();
    const dispatch = useDispatch();

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const pickPhoto = (item) => {
        setPickedPhoto(item)
        dispatch(modalActions.switchCreatePost('photos'))
    };

    return (
        <div className={classes.container}>
            {isModal && <PhotoOverlay url={pickedPhoto.url} title={pickedPhoto.title}/>}
            {props.photos.map((photo, index) => {
                return (
                    <div className={classes.subcontainer} key={photo.id} onClick={pickPhoto.bind(null, photo)}>
                        <div className={classes.img}>
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