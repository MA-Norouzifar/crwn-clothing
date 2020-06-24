import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
//     0
//   ),
// });
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
