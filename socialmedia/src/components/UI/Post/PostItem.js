import Card from "../Card";
import classes from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <Card>
            <div className={classes.container}>
                <p>{props.title}</p>
            </div>
        </Card>
    );
};

export default PostItem;