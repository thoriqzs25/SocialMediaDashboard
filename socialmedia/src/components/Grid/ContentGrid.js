import { Fragment } from "react";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";
import classes from './ContentGrid.module.css';
import { useSelector } from 'react-redux';

import PostOverlay from "../Layout/Overlays/PostOverlay";
import UserPage from "../../pages/UserPage";
import AlbumOverlay from "../Layout/Overlays/AlbumOverlay";


const ContentGrid = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const isModal = useSelector(state => state.modal.isModal);
    const modalType = useSelector(state => state.modal.type);
    console.log(modalType)

    return (
        <Fragment>
            <div className={classes.grid}>
                <div className={classes.content}>
                    {!isAuth && <Content />}
                    {isAuth && <UserPage />}
                    {isAuth && isModal && modalType === 'post' && <PostOverlay />}
                    {isAuth && isModal && modalType === 'album' && <AlbumOverlay />}
                </div>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </Fragment>
    );
};

export default ContentGrid;