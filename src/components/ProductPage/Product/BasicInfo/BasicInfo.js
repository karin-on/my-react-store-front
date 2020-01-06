import React from 'react';
import classes from './BasicInfo.scss';

const BasicInfo = () => (
    <div className={classes.BasicInfo}>
        <h2 className={classes.Name}>Basic t-shirt</h2>
        <h3 className={classes.Subtitle}>Subtitle</h3>
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
