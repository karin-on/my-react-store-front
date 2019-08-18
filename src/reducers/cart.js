import { ADD_TO_CART } from '../constants/cart';

const defaultState = {
    order: [],
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const productIndex = state.order
                .findIndex(el => el.productID === action.productID);
            const newOrder = [...state.order];

            if (productIndex >= 0) {
                const newLineItem = {...newOrder[productIndex]};
                newLineItem.quantity += action.quantity;
                newOrder[productIndex] = newLineItem;
            } else {
                newOrder.push({
                    productID: action.productID,
                    quantity: action.quantity,
                })
            }

            return {
                ...state,
                order: newOrder
            };

        default: return state;
    }
}