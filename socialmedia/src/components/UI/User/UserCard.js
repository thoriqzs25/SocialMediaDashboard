import { Fragment } from 'react';
import UserItem from './UserItem';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';

const UserCard = () => {
    const [userList, setUserList] = useState([]);
    const dispatch = useDispatch();

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

    const userLoginHandler = (id) => {
        console.log(id)
        dispatch(userActions.changeUser(id))
    };

    return (
    <Fragment>
        {userList.map((val, index) => {
            return (
                <UserItem 
                key={val.id}
                id={val.id} 
                name={val.name} 
                username={val.username} 
                email={val.email}
                onLogin={userLoginHandler.bind(null, val.id)}/>
                );
        })}
    </Fragment>
    );
};

export default UserCard;