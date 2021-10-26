import classes from './UserItem.module.css';
import user from '../../../assets/user1.png';

const UserItem = (props) => {
    return (
    <div>
        <div className={classes.userCard}>
            <div className={classes.grid}>
                <span><img src={user} alt="user_icon"/></span>
                <ul>
                    <li>username: {props.username}</li>
                    <li>name: {props.name}</li>
                    <li>email: {props.email}</li>
                </ul>
            </div>
        </div>
        <div className={classes.garis}></div>
    </div> 
    );
};

export default UserItem;