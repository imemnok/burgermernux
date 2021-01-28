import * as apiUtil from "../util/cart";
import {getMenuItem} from "../util/menu"
import { receiveErrors } from "./errors";

export const GET_CURRENT_CART = "GET_CURRENT_CART";
export const UPDATE_CURRENT_CART = "UPDATE_CURRENT_CART";
export const SET_CURRENT_CART_ITEM = "SET_CURRENT_CART_ITEM";

const setCurrentCartItem = (cartItem) => ({
  type: SET_CURRENT_CART_ITEM,
  cartItem,
});

const getCurrentCart = (cart) => ({
  type: GET_CURRENT_CART,
  cart,
});

const updateCurrentCart = (cart) => ({
  type: UPDATE_CURRENT_CART,
  cart,
});

export const updateCart = (cart) => async (dispatch) => {
  const response = await apiUtil.updateCart(cart);
  const data = await response.json();

  if (response.ok) {
    return dispatch(updateCurrentCart(data));
  }
  return dispatch(receiveErrors(data));
};

export const getCart = (cart) => async (dispatch) => {
  const response = await apiUtil.getCart(cart);
  console.log(response);
  const data = await response.json();

  if (response.ok) {
    console.log(data);
    return dispatch(getCart(data));
  }
  return dispatch(receiveErrors(data));
};

export const updateCartitems = (item) => async (dispatch) => {
    console.log("Updating Cart Items")
    const response = await getMenuItem(item);
    console.log(response)
    const data = await response.json()

    if (response.ok) {
        console.log(data)
        return dispatch(setCurrentCartItem(data));
    }
    return dispatch(receiveErrors(data))
//   return (dispatch) => {
//       fetch(`menu/menuItems/${item}`, {
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((result) => {
//           console.log(result);
//           return dispatch(
//             setCurrentCartItems((prevState) => [...prevState, result])
//           );
//         })
    
//   };
};
