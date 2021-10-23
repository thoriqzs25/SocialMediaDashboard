import Dot from '../UI/Dot';
import Search from '../UI/Search';
import classes from './MainHeader.module.css';
import user from '../../assets/user.png';

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <h1>SOCIAL MEDIA</h1>
            <nav>
                <ul>
                    <li><Search /></li>
                    <li><Dot item={user} alt={"user_alt"}/></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;