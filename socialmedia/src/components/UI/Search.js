import classes from './Search.module.css';
import search from '../../assets/search.png';

const Search = () => {
    return (
        <span className={classes.search}>
            <img alt="search_icon" src={search}/>
            <p>search engine</p>
        </span>
    );
};

export default Search;