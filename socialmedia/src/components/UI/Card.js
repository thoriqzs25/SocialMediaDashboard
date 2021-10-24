import classes from './Card.module.css';
import { useSelector } from 'react-redux';

const Card = (props) => {
    const modalType = useSelector(state => state.modal.type)

    return (
        <div className={classes.card}>
            <div className={classes.img}>
                {props.item}
                {props.children}
                {modalType === 'album' && 
                <div className={classes.index}>
                    {props.index}
                </div>}
            </div>
        </div>
    );
};

export default Card;