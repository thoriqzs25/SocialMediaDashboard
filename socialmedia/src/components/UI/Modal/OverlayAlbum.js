import classes from './OverlayAlbum.module.css';

const OverlayAlbum = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.card}>
                {props.children}
            </div>
        </div>
    );
};

export default OverlayAlbum;