import classes from './OverlayCard.module.css';

const OverlayCard = (props) => {
    return (
        <div className={classes.grid}>
            <div className={classes.card}>
                {props.children}
            </div>
        </div>
    );
};

export default OverlayCard;