import { combineReducers } from "redux";
import errors from "./errors/errors";
import session from "./session/session";
import menuItems from "./menu/menu"
import cart from "./cart/cart"
import cartItems from "./cart/cartItems"

export default combineReducers({
  session,
  menuItems,
  errors,
  cart, 
  cartItems
});