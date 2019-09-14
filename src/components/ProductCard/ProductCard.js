import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './ProductCard.scss';

const ProductCard = ({ page }) => (
    <div className={classes.Product}>
        <span className={classes.AddToFavIcon}>
            <i className="far fa-heart" />
        </span>
        <div className={classes.ProductImageHolder} />
        <div className={classNames(classes[`ProductInfo--${page}`])}>
            <span className={classNames(
                classes.ProductName,
                classes[`ProductName--${page}`])}
            >
                Basic t-shirt
            </span>
            <span className={classes.ProductPrice}>
                <span>$</span>
                <span>39.99</span>
            </span>
        </div>
    </div>
);

ProductCard.propTypes = {
    page: PropTypes.string.isRequired,
};

export { ProductCard };
