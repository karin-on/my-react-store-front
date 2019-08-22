import React from 'react';
import classes from './TopBanner.scss';

const TopBanner = () => (
    <section className={classes.Banner}>
        <h2 className={classes.Header}>
            Summer
            <br />
            Collection
        </h2>
        <button type="button" className={classes.Button}>
            Shop Now
        </button>
    </section>
);

export { TopBanner };
