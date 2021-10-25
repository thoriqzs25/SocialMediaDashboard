import UserCard from "../UI/User/UserCard";
import classes from './Sidebar.module.css';
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Sidebar = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    console.log(isAuth)
    return (
        <Fragment>
            {!isAuth && <div className={classes.sider}>
                <UserCard />
            </div>}
            {isAuth && <div className={classes.sider2}> 
                <UserCard />
            </div>}
        </Fragment>
    );
};

export default Sidebar;