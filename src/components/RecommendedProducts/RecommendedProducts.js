import React from 'react';
import classes from './RecommendedProducts.scss';

import { ProductCard } from '../ProductCard/ProductCard';

const RecommendedProducts = () => (
    <section className={classes.RecommendedProducts}>
        <div className={classes.Container}>
            <h4 className={classes.Header}>You may also like</h4>
            <ul className={classes.ProductList}>
                {[...Array(10).keys()].map((i) => (
                    <li className={classes.ListItem} key={i}>
                        <ProductCard parentComponent="RecommendedProducts" />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export { RecommendedProducts };
