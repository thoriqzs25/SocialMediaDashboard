import classes from './Type.module.css';

const Type3 = (props) => {
    return (
        <div className={`${classes.type3} ${classes.type}`}>
            {props.children}
        </div>
    );
};

export default Type3;