import React from 'react';
import classes from './CartItem.scss';

const CartItem = () => (
    <div className={classes.CartItem}>
        <div className={classes.ImageHolder} />

        {/*<div className={classNames(classes[`Info--${subclass}`])}>*/}
        {/*    <span className={classNames(*/}
        {/*        classes.Name,*/}
        {/*        classes[`Name--${subclass}`])}*/}
        {/*    >*/}
        {/*        Basic t-shirt*/}
        {/*    </span>*/}
        {/*    <span className={classes.Price}>*/}
        {/*        <span>$</span>*/}
        {/*        <span>39.99</span>*/}
        {/*    </span>*/}
        {/*</div>*/}

        <div>
            <span className={classes.Name}>
                Basic t-shirt
            </span>
            <span className={classes.Price}>
                <span>$</span>
                <span>39.99</span>
            </span>
        </div>

        <div className={classes.Trash}>
            <i className="far fa-trash-alt fa-lg" />
        </div>
    </div>
);

export { CartItem };
