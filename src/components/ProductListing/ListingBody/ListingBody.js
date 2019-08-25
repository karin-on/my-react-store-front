import React from 'react';
import classes from './ListingBody.scss';

const ListingBody = () => (
    <section>
        <ul className={classes.ProductsContainer}>
            <li className={classes.Product} />
            <li className={classes.Product} />
            <li className={classes.Product} />
            <li className={classes.Product} />
            <li className={classes.Product} />
            <li className={classes.Product} />
            <li className={classes.Product} />
            <li className={classes.Product} />
        </ul>
        <button className={classes.LoadMoreBtn} type="button">
            Load more
        </button>
    </section>
);

export { ListingBody };
