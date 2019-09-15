import React from 'react';
import classNames from 'classnames';
import classes from './AddToCart.scss';

const AddToCart = () => {
    const heartClasses = classNames(
        'far', 'fa-heart', 'fa-2x',
        classes.HeartIcon,
    );

    return (
        <div className={classes.AddToCart}>
            <div className={classes.SizeAndDelivery}>
                <a className={classes.SizeInfoLink} href="/">Size guide</a>
                <a className={classes.DeliveryInfoLink} href="/">Delivery and return</a>
            </div>
            <div className={classes.QuantityControls}>
                <button className={classes.LessBtn} type="button">-</button>
                <span className={classes.Quantity}>1</span>
                <button className={classes.MoreBtn} type="button">+</button>
            </div>
            <button className={classes.AddToWishlistBtn} type="button">
                <i className={heartClasses} />
                Add to Wishlist
            </button>
            <button className={classes.AddToCartBtn} type="button">
                Add to Bag
            </button>
        </div>
    );
};

export { AddToCart };
