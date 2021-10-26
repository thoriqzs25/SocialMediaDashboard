import { Fragment } from "react";
import { useSelector } from 'react-redux';

import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";
import classes from './ContentGrid.module.css';

import PostOverlay from "../Layout/Overlays/PostOverlay";
import UserPage from "../../pages/UserPage";
import AlbumOverlay from "../Layout/Overlays/AlbumOverlay";

import PostListOverlay from "../Layout/Overlays/PostListOverlay";
import CreateOverlay from "../Layout/Overlays/CreateOverlay/CreateOverlay";


const ContentGrid = () => {
    const modalType = useSelector(state => state.modal.type);
    const isModal = useSelector(state => state.modal.isModal);
    const subPage = useSelector(state => state.auth.subPage);

    return (
        <Fragment>
            <div className={classes.grid}>
                <div className={classes.content}>
                    {!subPage && <Content />}
                    {subPage && <UserPage />}
                    {subPage && isModal && modalType === 'create' && <CreateOverlay />}
                    {subPage && isModal && modalType === 'postList' && <PostListOverlay />}
                    {subPage && isModal && modalType === 'post' && <PostOverlay />}
                    {subPage && isModal && modalType === 'album' && <AlbumOverlay />}
                </div>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </Fragment>
    );
};

export default ContentGrid;