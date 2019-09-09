import React from 'react';
import classes from './Product.scss';

import { BasicInfo } from './BasicInfo/BasicInfo';
import { ColorsAndSizes } from './ColorsAndSizes/ColorsAndSizes';
import { AddToCart } from './AddToCart/AddToCart';
import { Descriptions } from './Descriptions/Descriptions';

const Product = () => (
    <>
        <div className={classes.ImagesContainer}>
            <div className={classes.ImageHolder} />
        </div>
        <BasicInfo />
        <ColorsAndSizes />
        <AddToCart />
        <Descriptions />
    </>
);

export { Product };
