import React from 'react';
import classes from './ProductListing.scss';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../PageHeader/PageHeader';
import { FiltersAndSorting } from '../FiltersAndSorting/FiltersAndSorting';
import { ListingBody } from './ListingBody/ListingBody';

const ProductListing = () => (
    <main className={classes.Listing}>
        <div className={classes.Container}>
            <Breadcrumbs />
            <PageHeader />
            <FiltersAndSorting />
            <ListingBody />
        </div>
    </main>
);

export { ProductListing };
