import classes from './Type.module.css';

const Type2 = (props) => {
    return (
        <div className={`${classes.type2} ${classes.type}`}>
            {props.children}
        </div>
    );
};

export default Type2;