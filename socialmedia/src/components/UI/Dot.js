import classes from './Dot.module.css';
import user from '../../assets/user.png';

const Dot = () => {
    return (
        <span className={classes.dot}>
            <img alt="user_icon" src={user} />
        </span>
    );
};

export default Dot;