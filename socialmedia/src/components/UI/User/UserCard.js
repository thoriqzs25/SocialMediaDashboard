import { Fragment, useEffect } from 'react';
import { getUser } from '../../../lib/api';
import classes from './UserCard.module.css';

const UserCard = () => {
    useEffect(async() => {
        const data = await getUser();

        for (const key in data) {
            console.log('masuk')
        }
    }, [])

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