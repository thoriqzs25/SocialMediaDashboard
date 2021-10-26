import { Fragment } from "react";
import { useSelector } from "react-redux";

import UserCard from "../UI/User/UserCard";
import classes from './Sidebar.module.css';

const Sidebar = () => {
    const subPage = useSelector(state => state.auth.subPage)

    return (
        <Fragment>
            {!subPage ? 
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