import {
    SET_CURRENT_CART_ITEM
} from "../../actions/cart"

const intialCartState = {
    cartItems:[]
}
export default (state = intialCartState, {type, cartItem}) => {
    Object.freeze(state)
    console.log(state)
    console.log(cartItem)
    switch (type) {
        case SET_CURRENT_CART_ITEM:
            // return [...cartItems, cartItems]
            return {
                ...state,
                cartItems: [...state.cartItems, cartItem]
            }
        default:
            return state
    }
}