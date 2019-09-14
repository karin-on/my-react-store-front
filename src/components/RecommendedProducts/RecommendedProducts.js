import React from 'react';
import classes from './RecommendedProducts.scss';

import { ProductCard } from '../ProductCard/ProductCard';

const productPage = 'ProdPage';

const RecommendedProducts = () => (
    <div className={classes.RecommendedProducts}>
        <h4 className={classes.Header}>You may also like</h4>
        <ul className={classes.ProductList}>
            {[...Array(10).keys()].map((i) => (
                <li className={classes.ListItem} key={i}>
                    <ProductCard page={productPage} />
                </li>
            ))}
        </ul>
    </div>
);

export { RecommendedProducts };
