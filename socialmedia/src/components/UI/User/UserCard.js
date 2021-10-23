import { Fragment } from 'react';
import classes from './UserCard.module.css';

const UserCard = () => {
    return (
        <Fragment>
            <div className={classes.userCard}>
                <div className={classes.grid}>
                    <span><img /></span>
                    <ul>
                        <li>username: thoriqzs</li>
                        <li>post: 29</li>
                        <li>album: 12</li>
                    </ul>
                </div>
            </div>
            <div className={classes.garis}></div>
        </Fragment>
    );
};

export default UserCard;