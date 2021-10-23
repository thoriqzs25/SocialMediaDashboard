import Dot from '../UI/Dot';
import Search from '../UI/Search';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <h1>SOCIAL MEDIA</h1>
            <nav>
                <ul>
                    <li><Search /></li>
                    <li><Dot /></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;