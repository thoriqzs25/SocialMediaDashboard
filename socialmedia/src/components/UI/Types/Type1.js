import classes from './Type.module.css';

const Type1 = (props) => {
    return (
        <div className={`${classes.type1} ${classes.type}`}>
            {props.children}
        </div>
    );
};

export default Type1;