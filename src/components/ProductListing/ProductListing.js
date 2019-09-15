import React from 'react';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../PageHeader/PageHeader';
import { FiltersAndSorting } from '../FiltersAndSorting/FiltersAndSorting';
import { ListingBody } from './ListingBody/ListingBody';

const ProductListing = () => (
    <>
        <Breadcrumbs />
        <section>
            <PageHeader />
            <FiltersAndSorting />
            <ListingBody />
        </section>
    </>
);

export { ProductListing };
