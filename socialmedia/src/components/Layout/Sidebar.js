import { Fragment } from "react";
import { useSelector } from "react-redux";

import UserCard from "../UI/User/UserCard";
import classes from './Sidebar.module.css';

const Sidebar = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    return (
        <Fragment>
            {!isAuth ? 
            <div className={classes.sider}>
                <UserCard />
            </div>
            :
            <div className={classes.sider2}> 
                <UserCard />
            </div>}
        </Fragment>
    );
};

export default Sidebar;