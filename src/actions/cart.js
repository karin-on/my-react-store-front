/* eslint-disable */

import { ADD_TO_CART } from '../constants/cart';

export function addToCart(productID, quantity) {
    return {
        type: ADD_TO_CART,
        productID: productID,
        quantity,
    }
}
