import CartActionTypes from "./cart.types";
export const addItemToCart = (cartItems, cartItemToAdd) => {
import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItems,action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;