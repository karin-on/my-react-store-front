import React from 'react';
import classes from './Product.scss';

import { BasicInfo } from './BasicInfo/BasicInfo';
import { ColorsAndSizes } from './ColorsAndSizes/ColorsAndSizes';
import { AddToCart } from './AddToCart/AddToCart';

const Product = () => (
    <>
        <div className={classes.ImagesContainer}>
            <div className={classes.ImageHolder} />
        </div>
        <BasicInfo />
        <ColorsAndSizes />
        <AddToCart />
    </>
);

export { Product };
