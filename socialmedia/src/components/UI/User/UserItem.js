import classes from './UserItem.module.css';

const UserItem = (props) => {
    return (
    <div onClick={props.onLogin}>
        <div className={classes.userCard}>
            <div className={classes.grid}>
                <span><img /></span>
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