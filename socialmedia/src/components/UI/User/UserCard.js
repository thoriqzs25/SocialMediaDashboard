import { Fragment } from 'react';
import UserItem from './UserItem';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';
import { authActions } from '../../store/auth-slice';
import { useSelector } from 'react-redux';

const UserCard = () => {
    const [userList, setUserList] = useState([]);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userId)

    useEffect(() => {
        const fetchUser = async () => {
            const getUser = await fetch('https://jsonplaceholder.typicode.com/users');
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

    const userLoginHandler = (item) => {
        if(userId === -1) {
            dispatch(authActions.toggle())
        }

        dispatch(userActions.changeUser({
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email
        }))
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
                onLogin={userLoginHandler.bind(null, val)}/>
                );
        })}
    </Fragment>
    );
};

export default UserCard;