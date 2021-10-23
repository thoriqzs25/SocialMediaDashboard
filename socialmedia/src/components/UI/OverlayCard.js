import classes from './OverlayCard.module.css';

const OverLay = (props) => {
    return (
        <div className={classes.grid}>
            <div className={classes.card}>
                <div className={classes.img}></div>
                <div className={classes.desc}>{props.item}</div>
            </div>
        </div>
    );
};

export default OverLay;