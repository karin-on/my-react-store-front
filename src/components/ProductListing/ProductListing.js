import React from 'react';
import classes from './ProductListing.scss';

import { PageHeader } from '../PageHeader/PageHeader';
import { ListingBody } from './ListingBody/ListingBody';

const ProductListing = () => (
    <main className={classes.Listing}>
        <div className={classes.Container}>
            <PageHeader />
            <ListingBody />
        </div>
    </main>
);

export { ProductListing };
