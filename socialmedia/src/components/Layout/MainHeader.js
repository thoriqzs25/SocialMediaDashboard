import Dot from '../UI/Dot';
import Search from '../UI/Search';
import classes from './MainHeader.module.css';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import album from '../../assets/album.png';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { Link } from 'react-router-dom';
import { userActions } from '../store/user-slice';
import { modalActions } from '../store/modal-slice';

const MainHeader = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const currPage = useSelector(state => state.auth.currPage);
    const nameLogin = useSelector(state => state.user.name)
    const userId = useSelector(state => state.user.userId)

    const toggleHandler = (event) => {
        event.preventDefault();

        dispatch(authActions.toggle());
    };

    const albumToggle = (event) => {
        event.preventDefault();

        dispatch(authActions.navigate('album'))
    };

    const homeToggle = (event) => {
        event.preventDefault();

        dispatch(authActions.toggle());
        dispatch(authActions.navigate('home'));
        console.log(currPage)
    };

    const logoutHandler = (event) => {
        event.preventDefault();

        dispatch(userActions.logoutReducer())
    };

    const albumModalToggle = (event) => {
        event.preventDefault();

        dispatch(modalActions.toggleAlbumModal())
    };

    return (
        <header className={classes.header}>
            {isAuth && 
            <div onClick={toggleHandler}>
                <Link to='/'>
                    <h1>SOCIAL MEDIA</h1>
                </Link>
            </div>}
            {!isAuth && <div><h1>SOCIAL MEDIA</h1></div>}
            <nav>
                <ul>
                    {isAuth && currPage === 'home' &&
                    <li onClick={albumModalToggle}>
                        <Dot item={album} alt={"album_alt"} />
                    </li>}

                    <li><Search /></li>

                    {!isAuth && 
                    <li onClick={toggleHandler}><Dot item={user} alt={"user_alt"} />
                    </li>}

                    {isAuth && 
                    <li onClick={homeToggle}>
                        <Link to='/'>
                            <Dot item={home} alt={"home_alt"} />
                        </Link>
                    </li>}

                    {userId > -1 && <li>{nameLogin}</li>}
                    {userId > -1 && 
                    <li onClick={logoutHandler}>
                        <Link to='/'>
                            <button>LogOut</button>
                        </Link>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;