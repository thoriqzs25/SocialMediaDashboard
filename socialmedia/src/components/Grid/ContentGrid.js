import { Fragment } from "react";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";
import classes from './ContentGrid.module.css';

const ContentGrid = () => {
    return (
        <Fragment>
            <div className={classes.grid}>
                <div className={classes.content}>
                    <Content />
                </div>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </Fragment>
    );
};

export default ContentGrid;