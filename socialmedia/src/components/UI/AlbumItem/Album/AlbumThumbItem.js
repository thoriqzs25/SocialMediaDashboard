import Card from '../../Card';
import classes from './AlbumThumbItem.module.css';

const AlbumThumbItem = (props) => {
    return (
        <Card>
            <div className={classes.container}>
                <p>{props.title}</p>
            </div>
        </Card>
    );
};

export default AlbumThumbItem;