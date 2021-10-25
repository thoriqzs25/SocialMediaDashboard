import classes from './OverlayCreate.module.css';

const OverlayCreate = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.card}>
                {props.children}
            </div>
        </div>
    );
};

export default OverlayCreate;