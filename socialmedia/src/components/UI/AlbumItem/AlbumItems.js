import Card from "../Card";
import classes from './AlbumItem.module.css';

const AlbumItem = (props) => {
    return (
        <div className={classes.container}>
            {props.photos.map((photo, index) => {
                return (
                    <div>
                        <Card>
                            {/* <img src={photo.url} />   */}
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

    

export default AlbumItem;