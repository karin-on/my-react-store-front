import React from 'react';
import classes from './ProductCard.scss';

const ProductCard = () => (
    <li className={classes.Product}>
        <span className={classes.AddToFavIcon}>
            <i className="far fa-heart" />
        </span>
        <div className={classes.ProductImageHolder} />
        <div className={classes.ProductInfo}>
            <span className={classes.ProductName}>Basic t-shirt</span>
            <span className={classes.ProductPrice}>
                <span>$</span>
                <span>39.99</span>
            </span>
        </div>
    </li>
);

export { ProductCard };
