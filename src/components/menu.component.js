import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../css/home.css";
import Banner from "./banner.component";
import { updateCart,updateCartitems } from "../actions/cart";

const imgSrc = "http://localhost:4001/images/";

const mapStateToProps = ({
  session: { userId, userName, userRole },
  menuItems,
  cart,
  cartItems,
}) => ({
  userId,
  userName,
  userRole,
  menuItems,
  cart,
  cartItems
});

const mapDispatchToProps = (dispatch) => ({
  updateCart: (cart) => dispatch(updateCart(cart)),
  setCartItems: (item) => dispatch(updateCartitems(item))
});

function Menu({ menuItems, userId, cart, history, updateCart, setCartItems, cartItems }) {
  const handleOrder = (item) => {
    if (!userId) {
      console.log("Not Logged in");
      history.push("/login");
      // <Redirect to='/login' />
    } else {
      // console.log(cart);
      if (!cart || cart.active === false) {
        const newCart = {
          customer: userId,
          items: [{ item: item }],
          active: true,
        };
        updateCart(newCart);
        setCartItems(item)
      } else {
        const updatedCart = {
          _id: cart._id,
          customer: userId,
          items: [{ item: item }],
          active: true,
        };
        console.log(updatedCart)
        updateCart(updatedCart);
        setCartItems(item)
      }
    }
  };
  console.log(cart)
  console.log(cartItems)
  return (
    <>
      <Banner />
      <div className="more-body menu-body">
        <Container className="menu-container">
          <ul>
            <li key="burger">
              <div>{cart._id}</div>
              <h1>Burgers</h1>
              <ul>
                {menuItems.map(
                  (item) =>
                    item.category === "burger" && (
                      <li key={item._id}>
                        <div className="menu-listing">
                          <h4 className="alignLeft">{item.name}</h4>
                          <h4 className="alignRight">{item.price}</h4>
                          <div className="clear"></div>
                        </div>
                        <div className="alignLeft">{item.description}</div>
                        <Button
                          className="alignRight order-button center-button"
                          size="sm"
                          onClick={() => handleOrder(item._id)}
                        >
                          Add To Cart
                        </Button>
                        <div className="clear"></div>
                      </li>
                    )
                )}
              </ul>
            </li>
            <li key="sandwich">
              <h1>Sandwiches</h1>
              {menuItems.map(
                (item) =>
                  item.category === "sandwich" && (
                    <li key={item._id}>
                      <div className="menu-listing">
                        <h4 className="alignLeft">{item.name}</h4>
                        <h4 className="alignRight">{item.price}</h4>
                        <div className="clear"></div>
                      </div>
                      <div className="alignLeft">{item.description}</div>
                      <Button
                        className="alignRight order-button center-button"
                        size="sm"
                        onClick={() => handleOrder(item._id)}
                      >
                        Add To Cart
                      </Button>
                      <div className="clear"></div>
                    </li>
                  )
              )}
            </li>
            <li key="sides">
              <h1>Sides</h1>
              {menuItems.map(
                (item) =>
                  item.category === "sides" && (
                    <li key={item._id}>
                      <div className="menu-listing">
                        <h4 className="alignLeft">{item.name}</h4>
                        <h4 className="alignRight">{item.price}</h4>
                        <div className="clear"></div>
                      </div>
                      <div className="alignLeft">{item.description}</div>
                      <Button
                        className="alignRight order-button center-button"
                        size="sm"
                        onClick={() => handleOrder(item._id)}
                      >
                        Add To Cart
                      </Button>
                      <div className="clear"></div>
                    </li>
                  )
              )}
            </li>
            <li key="drinks">
              <h1>Drinks</h1>
              {menuItems.map(
                (item) =>
                  item.category === "drinks" && (
                    <li key={item._id}>
                      <div className="menu-listing">
                        <h4 className="alignLeft">{item.name}</h4>
                        <h4 className="alignRight">{item.price}</h4>
                        <div className="clear"></div>
                      </div>
                      <div className="alignLeft">{item.description}</div>
                      <Button
                        className="alignRight order-button center-button"
                        size="sm"
                        onClick={() => handleOrder(item._id)}
                      >
                        Add To Cart
                      </Button>
                      <div className="clear"></div>
                    </li>
                  )
              )}
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
