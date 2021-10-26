import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { userActions } from '../store/user-slice';

import Dot from '../UI/Dot';
import Search from '../UI/Search';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import classes from './MainHeader.module.css';

const MainHeader = () => {
<<<<<<< HEAD
    var userData = JSON.parse(localStorage.getItem("userData"));
    var isLogin = localStorage.getItem("isLogin")
    const nameLogin = userData.name;
    console.log(userData)
    
    const dispatch = useDispatch();
=======
    const dispatch = useDispatch();

    const userId = useSelector(state => state.user.userId);
    const nameLogin = useSelector(state => state.user.name);
>>>>>>> loading
    const subPage = useSelector(state => state.auth.subPage);

    const currPage = useSelector(state => state.auth.currPage);

    const toggleHandler = () => {
        dispatch(authActions.toggleSubPage());
    };


    const homeToggle = () => {
        dispatch(authActions.toggleHome());
        dispatch(authActions.navigate('home'));
    };

    const logoutHandler = () => {
<<<<<<< HEAD
        localStorage.setItem("isLogin", false)
=======
        localStorage.removeItem("userData");
        localStorage.removeItem("isLogin")
>>>>>>> loading
        
        dispatch(authActions.toggleHome());
        dispatch(authActions.navigate('home'));
    };

    return (
        <header className={classes.header}>

            {subPage ?
            <div onClick={toggleHandler}>
                <Link to='/'>
                    <h1>SOCIAL MEDIA</h1>
                </Link>
            </div> 
            :
            <div>
                <h1>SOCIAL MEDIA</h1>
            </div>}

            <nav>
                <ul>
                    {isLogin ? <li><p>{nameLogin}</p></li> : <li>{ currPage === 'home' &&
                    <p>Welcome... Choose a user</p>}
                    </li>}

                    {isLogin && 
                    <li onClick={logoutHandler}>
                        <Link to='/'>
                            <button>LogOut</button>
                        </Link>
                    </li>}

                    {currPage === 'home' && <li><Search /></li>}
                    
                    {subPage ?
                    <li onClick={homeToggle}>
                        <Link to='/'>
                            <Dot item={home} alt={"home_alt"} />
                        </Link>
                    </li>
                    :
                    <li onClick={toggleHandler}>
                        <Dot item={user} alt={"user_alt"} />
                    </li>}

                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;