import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TopBanner.scss';

const TopBanner = () => (
    <section className={classes.Banner}>
        <h2 className={classes.Header}>
            Summer
            <br />
            Collection
        </h2>
        <Link to="/products" className={classes.Button}>
            Shop Now
        </Link>
    </section>
);

export { TopBanner };
