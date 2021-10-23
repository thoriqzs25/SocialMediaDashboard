import { Fragment } from "react";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";
import classes from './ContentGrid.module.css';
import { useSelector } from 'react-redux';
import OverLay from "../UI/OverlayCard";

const ContentGrid = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)

    return (
        <Fragment>
            <div className={classes.grid}>
                <div className={classes.content}>
                    {!isAuth && <Content />}
                    {isAuth && <OverLay />}
                </div>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </Fragment>
    );
};

export default ContentGrid;