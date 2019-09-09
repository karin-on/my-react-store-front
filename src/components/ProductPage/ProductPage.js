import React from 'react';
import classes from './ProductPage.scss';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Product } from './Product/Product';

const ProductPage = () => (
    <main>
        <div className={classes.Container}>
            <Breadcrumbs />
            <Product />
        </div>
    </main>
);

export { ProductPage };
