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
    const dispatch = useDispatch();

    const subPage = useSelector(state => state.auth.subPage);
    const currPage = useSelector(state => state.auth.currPage);
    const nameLogin = useSelector(state => state.user.name)
    const userId = useSelector(state => state.user.userId)
    const toggleHandler = () => {
        dispatch(authActions.toggleSubPage());
    };


    const homeToggle = () => {
        dispatch(authActions.toggleHome());
        dispatch(authActions.navigate('home'));
    };

    const logoutHandler = () => {
        dispatch(userActions.logoutReducer())
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
                    {userId > 0 && <li><p>{nameLogin}</p></li>}

                    {userId > 0 && 
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