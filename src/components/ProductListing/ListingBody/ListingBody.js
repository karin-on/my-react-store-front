import React from 'react';
import classes from './ListingBody.scss';

import { ProductCard } from '../../ProductCard/ProductCard';

const productListing = 'ProdList';

const ListingBody = () => (
    <>
        <div className={classes.ProductsContainer}>
            <ul className={classes.ProductsList}>

                {[...Array(10).keys()].map((i) => (
                    <li key={i}>
                        <ProductCard page={productListing} />
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
