import classes from './UserCard.module.css';

const UserCard = () => {
    return (
        <div>
            <span className={classes.userCard}><img /></span>
            <ul>
                <li>username: </li>
                <li>post: </li>
                <li>album:</li>
            </ul>
        </div>
    );
};

export default UserCard;