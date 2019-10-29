import React from 'react';
import classes from './ListingBody.scss';

import { ProductCard } from '../../ProductCard/ProductCard';

const ListingBody = () => (
    <>
        <div className={classes.ListingBody}>
            <div className={classes.Container}>
                <ul className={classes.ProductsList}>
                    {[...Array(10).keys()].map((i) => (
                        <li key={i}>
                            <ProductCard parentComponent="ListingBody" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={classes.LoadMore}>
            <button className={classes.LoadMoreBtn} type="button">
                Load more
            </button>
        </div>
    </>
);

export { ListingBody };
