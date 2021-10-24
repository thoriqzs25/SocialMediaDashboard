import UserCard from "../UI/User/UserCard";
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sider}>
            <UserCard />
        </div>
    );
};

export default Sidebar;