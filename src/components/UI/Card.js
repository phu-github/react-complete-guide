import React from 'react';
import classes from '../UI/Card.module.css';
function Card(props) {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;