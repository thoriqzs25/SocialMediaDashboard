import Card from "../Card";
import classes from './AlbumItem.module.css';

const AlbumItem = (props) => {
    const scrollUp = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className={classes.container}>
            {props.photos.map((photo, index) => {
                return (
                    <div className={classes.subcontainer}>
                        <div className={classes.img}>
                            <img src={photo.url} />  
                        </div>
                    </div>
                );
            })}
            <button onClick={scrollUp}>Scroll UP</button>
        </div>
    );
};

    

export default AlbumItem;