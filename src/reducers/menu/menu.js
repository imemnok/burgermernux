import {
    GET_MENU_ITEMS,
    GET_MENU_ITEM,
    ADD_MENU_ITEM
} from "../../actions/menu"

export default (state = "", {type, menuItem, menuItems}) => {
    Object.freeze(state)
    switch (type) {
        case GET_MENU_ITEMS:
            return menuItems;
        case GET_MENU_ITEM:
            return menuItem;
        case ADD_MENU_ITEM:
            return menuItem;
        default:
            return state
    }
}