import * as apiUtil from "../util/menu"
import { receiveErrors } from "./errors";

export const GET_MENU_ITEMS = "GET_MENU_ITEMS";
export const GET_MENU_ITEM = "GET_MENU_ITEM";
export const ADD_MENU_ITEM = "ADD_MENU_ITEM";

const getMenuItems = menuItems => ({
    type: GET_MENU_ITEMS,
    menuItems
})

const getMenuItem = menuItem => ({
    type: GET_MENU_ITEM,
    menuItem
})

const addMenuItem = menuItem => ({
    type: ADD_MENU_ITEM,
    menuItem
})

export const getAllMenuItems = () => async dispatch => {
    // fetch("menu/menuItems", {
    //     method: "GET",
    //   }).then((response) => {
    //       if(!response.ok) {
    //           throw Error(response.statusText)
    //       }

    //       return response
    //   }).then((response) => response.json())
    //   .then((menuItems) => dispatch(getMenuItems))
    const response = await apiUtil.getMenuItems();
    const data = await response.json()
    
    if(response.ok) {
        return dispatch(getMenuItems(data))
    }
    return dispatch(receiveErrors(data))
}