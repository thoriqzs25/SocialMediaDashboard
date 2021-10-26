import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user-slice';
import { authActions } from '../../store/auth-slice';

import UserItem from './UserItem';

const UserCard = () => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search.search)

    const [userList, setUserList] = useState([]);


    useEffect(() => {
        const fetchUser = async () => {
            const getUser = await fetch('https://jsonplaceholder.typicode.com/users');
            const userJSON = await getUser.json();
    
            const userData = [];

            for (const key in userJSON) {
                userData.push({
                    id: userJSON[key].id,
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
        localStorage.setItem("isLogin", true);
        localStorage.setItem("userData", JSON.stringify(item));

        dispatch(authActions.toggleSubPage())
        dispatch(userActions.changeUser({
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email
        }))
    };

    const filterSearch = userList.filter(val => {
        return val.name.toLowerCase().includes(search.toLowerCase())
    });

    return (
    <Fragment>
        {search === '' ? 
        <Fragment>
            {userList.map((val, index) => {
                return (
                    <Fragment key={index}>
                        <div onClick={userLoginHandler.bind(null, val)}>
                            <UserItem 
                            id={val.id} 
                            name={val.name} 
                            username={val.username} 
                            email={val.email}/>
                        </div>
                    </Fragment>
                );
            })}
        </Fragment>
        :
        <Fragment>
            {filterSearch.map((val, index) => {
                return (
                    <Fragment key={index}>
                        <div onClick={userLoginHandler.bind(null, val)}>
                            <UserItem 
                            id={val.id} 
                            name={val.name} 
                            username={val.username} 
                            email={val.email}/>
                        </div>
                    </Fragment>
                );
            })}
        </Fragment>
        }
    </Fragment>
    );
};

export default UserCard;