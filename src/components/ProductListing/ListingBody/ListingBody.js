import React from 'react';
import classes from './ListingBody.scss';

const ListingBody = () => (
    <>
        <div className={classes.ProductsContainer}>
            <ul className={classes.ProductsList}>

                {[...Array(10).keys()].map((i) => (
                    <li className={classes.Product} key={i}>
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
                ))}

            </ul>
        </div>
        <div className={classes.LoadMoreContainer}>
            <button className={classes.LoadMoreBtn} type="button">
                Load more
            </button>
        </div>
    </>
);

export { ListingBody };
