import Dot from '../UI/Dot';
import Search from '../UI/Search';
import classes from './MainHeader.module.css';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import album from '../../assets/album.png';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { Link } from 'react-router-dom';

const MainHeader = (props) => {
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const toggleHandler = (event) => {
        event.preventDefault();

        dispatch(authActions.toggle());
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
                    <li><Search /></li>
                    {!isAuth && <li onClick={toggleHandler}><Dot item={user} alt={"user_alt"} /></li>}
                    {isAuth && <li onClick={toggleHandler}>
                        <Link to='/'>
                            <Dot item={home} alt={"home_alt"} />
                        </Link>
                        </li>}
                    {isAuth && 
                    <li>
                        <Link to='/album'>
                            <Dot item={album} alt={"album_alt"} />
                        </Link>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;