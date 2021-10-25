import classes from './Type.module.css';

const Type4 = (props) => {
    return (
        <div className={`${classes.type4} ${classes.type}`}>
            {props.children}
        </div>
    );
};

export default Type4;