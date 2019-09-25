import React from 'react';
import classes from './CartItems.scss';

import { CartItem } from './CartItem/CartItem';

const CartItems = () => (
    <section>
        <div className={classes.Container}>
            <ul className={classes.CartItems}>
                <li>
                    <CartItem />
                </li>
                <li>
                    <CartItem />
                </li>
            </ul>
        </div>
    </section>
);

export { CartItems };
