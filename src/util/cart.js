export const getCarts = () =>
  fetch("cart/", {
    method: "GET",
  });

export const getCart = (cart) =>
  fetch(`cart/${cart}`, {
    method: "GET",
  });

export const createCart = (cart) =>
  fetch("cart/add", {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const updateCart = (cart) =>
  fetch(`cart/update`, {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-Type": "application/json",
    },
  });
