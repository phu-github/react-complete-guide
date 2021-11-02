import './Card.scss';

export default function Card(props) {
    const classes = 'card-expense card-expense--' + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
};
