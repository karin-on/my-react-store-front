import React from 'react';
import classNames from 'classnames';
import classes from './Product.scss';

import { ProductImages } from './ProductImages/ProductImages';
import { BasicInfo } from './BasicInfo/BasicInfo';
import { ColorsAndSizes } from './ColorsAndSizes/ColorsAndSizes';
import { AddToCart } from './AddToCart/AddToCart';
import { Descriptions } from './Descriptions/Descriptions';

const Product = () => (
    <section>
        <div className={classNames(classes.Container, classes.ProdContainer)}>
            <ProductImages />
            <BasicInfo />
            <ColorsAndSizes />
            <AddToCart />
            <Descriptions />
        </div>
    </section>
);

export { Product };
