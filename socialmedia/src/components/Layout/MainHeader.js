import Dot from '../UI/Dot';
import Search from '../UI/Search';
import classes from './MainHeader.module.css';
import user from '../../assets/user.png';
import home from '../../assets/home.png'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const MainHeader = (props) => {
    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const toggleHandler = (event) => {
        event.preventDefault();

        dispatch(authActions.toggle());
    };
    console.log(isAuth)
    return (
        <header className={classes.header}>
            <h1>SOCIAL MEDIA</h1>
            <nav>
                <ul>
                    <li><Search /></li>
                    {!isAuth && <li onClick={toggleHandler}><Dot item={user} alt={"user_alt"} /></li>}
                    {isAuth && <li onClick={toggleHandler}><Dot item={home} alt={"home_alt"} /></li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;