import classes from './Dot.module.css';

const Dot = (props) => {
    return (
        <span className={classes.dot}>
            <img alt={props.alt} src={props.item} />
        </span>
    );
};

export default Dot;