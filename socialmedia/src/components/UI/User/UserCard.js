import { Fragment, useEffect, useState } from 'react';
import classes from './UserCard.module.css';

const UserCard = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const getUser = await fetch('/users');
            const userJSON = await getUser.json();
    
            const userData = [];

            for (const key in userJSON) {
                userData.push({
                    id: key,
                    name: userJSON[key].name,
                    username: userJSON[key].username,
                    email: userJSON[key].email
                });
            } 
            setUserList(userData)
        };
        fetchUser();
    }, []);

    const userLoginHandler = (event, key) => {
        event.preventDefault();

        console.log(event)
    };
    
    return (
    <Fragment>
        {userList.map((user) => {
            return (
                <div key={user.id} datakey={user.id} onClick={userLoginHandler}>
                    <div className={classes.userCard}>
                        <div className={classes.grid}>
                            <span><img /></span>
                            <ul>
                                <li>username: {user.username}</li>
                                <li>name: {user.name}</li>
                                <li>email: {user.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.garis}></div>
                </div>
            )
        })}
    </Fragment>
    );
};

export default UserCard;