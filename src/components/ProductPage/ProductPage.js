import React from 'react';
import classes from './ProductPage.scss';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Product } from './Product/Product';
import { RecommendedProducts } from '../RecommendedProducts/RecommendedProducts';

const ProductPage = () => (
    <div className={classes.Container}>
        <Breadcrumbs />
        <Product />
        <RecommendedProducts />
    </div>
);

export { ProductPage };
