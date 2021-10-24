import { Fragment } from "react";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";
import classes from './ContentGrid.module.css';
import { useSelector } from 'react-redux';

import PostOverlay from "../Layout/Overlays/PostOverlay";


const ContentGrid = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)

    return (
        <Fragment>
            <div className={classes.grid}>
                <div className={classes.content}>
                    <PostOverlay />
                    {!isAuth && <Content />}
                </div>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </Fragment>
    );
};

export default ContentGrid;