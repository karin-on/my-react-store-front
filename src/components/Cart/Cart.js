import React from 'react';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../PageHeader/PageHeader';
import { CartItems } from './CartItems/CartItems';

const Cart = () => (
    <>
        <Breadcrumbs />
        <PageHeader mainHeaderTxt="Your shopping bag" />
        <CartItems />
    </>
);

export { Cart };
