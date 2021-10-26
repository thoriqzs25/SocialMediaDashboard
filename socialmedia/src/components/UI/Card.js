import { Fragment } from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    console.log(props.title)
    return (
        <Fragment>
            {props.title === '+' ? 
                <div className={classes.card}>
                    <button>
                        <div className={classes.img}>
                            {props.children}
                        </div>
                    </button>
                </div>
            :
            <div className={`${classes.card} ${classes.pink}`}>
                <div className={classes.img}>
                    {props.item}
                    {props.children}
                </div>
            </div>
            }
        </Fragment>
    );
};

export default Card;