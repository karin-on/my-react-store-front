import React from 'react';
import classes from './ProductListing.scss';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageSubheader } from '../PageHeader/PageSubheader/PageSubheader';
import { FiltersAndSorting } from '../FiltersAndSorting/FiltersAndSorting';
import { ListingBody } from './ListingBody/ListingBody';

const ProductListing = () => (
    <section>
        <div className={classes.Container}>
            <Breadcrumbs />
            <PageHeader mainHeaderTxt="T-shirts">
                <PageSubheader
                    subheaderTxt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, possimus?"
                />
            </PageHeader>
            <FiltersAndSorting />
            <ListingBody />
        </div>
    </section>
);

export { ProductListing };
