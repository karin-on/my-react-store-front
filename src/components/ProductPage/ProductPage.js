import React from 'react';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Product } from './Product/Product';
import { RecommendedProducts } from '../RecommendedProducts/RecommendedProducts';

const ProductPage = () => (
    <>
        <Breadcrumbs />
        <Product />
        <RecommendedProducts />
    </>
);

export { ProductPage };
