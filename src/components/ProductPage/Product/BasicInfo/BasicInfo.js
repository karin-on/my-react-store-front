import React from 'react';
import classes from './BasicInfo.scss';

const BasicInfo = () => (
    <div className={classes.BasicInfo}>
        <span className={classes.Name}>Basic t-shirt</span>
        <span className={classes.Subtitle}>Subtitle</span>
        <span className={classes.Price}>
            <span>$</span>
            <span>39.99</span>
        </span>
        <span className={classes.Availability}>
            Availability:
            <span className={classes.AvailabilityStatus}>In stock</span>
        </span>
    </div>
);

export { BasicInfo };
