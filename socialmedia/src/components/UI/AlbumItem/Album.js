import classes from './Album.module.css';
import AlbumItem from './AlbumItems';

const Album = () => {
    return (
        <div className={classes.container}>
            <AlbumItem />
        </div>
    );
};

export default Album;