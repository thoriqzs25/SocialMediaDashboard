import classes from './Search.module.css';
import search from '../../assets/search.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from '../store/search-slice';

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
    };

    const searchHandler = (e) => {
        e.preventDefault();

        dispatch(searchActions.search(searchValue));
    }

    return (
        <form className={classes.search} onSubmit={searchHandler}>
            <img alt="search_icon" src={search} onClick={searchHandler}/>
            <input type='text' value={searchValue} placeholder='Search Engine' onChange={onChangeHandler}></input>
        </form>
    );
};

export default Search;