export const getMenuItems = () =>
  fetch("menu/menuItems", {
    method: "GET",
  });

export const getMenuItem = (menuItem) =>
  fetch(`menu/menuItems/${menuItem}`, {
    method: "GET",
  });

export const addMenuItem = (menuItem) =>
  fetch("menu/add", {
    method: "POST",
    body: JSON.stringify(menuItem),
    headers: {
      "Content-Type": "application/json",
    },
  });
