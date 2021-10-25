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
    const search = useSelector(state => state.search.search)
    console.log(search)


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
        if(userId === -1) { //kalau belom login -> ketika login langusng redirect ke post sm album page
            console.log('masuk')
            dispatch(authActions.toggle())
        }
        console.log('masuk')
        console.log(item)
        dispatch(userActions.changeUser({
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email
        }))
    };

    const filterSearch = userList.filter(val => {
        console.log(val.name, search.toLowerCase())
        return val.name.toLowerCase().includes(search.toLowerCase())
    })

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