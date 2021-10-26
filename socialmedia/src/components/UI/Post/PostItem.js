import Card from "../Card";
import classes from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <Card title={props.title}>
            {props.title === '+' ? 
            <div className={classes.plus}>
                <p>{props.title}</p>
            </div>
            :
            <div className={classes.container}>
                <p>{props.title}</p>
            </div>
            }
        </Card>
    );
};

export default PostItem;