import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './ProductCard.scss';

const ProductCard = ({ subclass }) => (
    <div className={classes.Card}>
        <Link to="/product" className={classes.CardLink}>
            <span className={classes.AddToFavIcon}>
                <i className="far fa-heart" />
            </span>
            <div className={classes.ImageHolder} />
            <div className={classNames(classes[`Info--${subclass}`])}>
                <span className={classNames(
                    classes.Name,
                    classes[`Name--${subclass}`])}
                >
                    Basic t-shirt
                </span>
                <span className={classes.Price}>
                    <span>$</span>
                    <span>39.99</span>
                </span>
            </div>
        </Link>
    </div>
);

ProductCard.propTypes = {
    subclass: PropTypes.string.isRequired,
};

export { ProductCard };
