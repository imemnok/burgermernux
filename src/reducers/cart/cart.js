import {
    GET_CURRENT_CART,
    UPDATE_CURRENT_CART
} from "../../actions/cart"

export default (state = "", {type, cart}) => {
    Object.freeze(state)
    switch (type) {
        case GET_CURRENT_CART:
            return cart;
        case UPDATE_CURRENT_CART:
            return cart;
        default:
            return state
    }
}