import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { updateCart } from "../actions/cart";
import "../css/cart.css";
import { getMenuItem } from "../util/menu";

// const mapStateToProps = ({cart}) => ({cart})

const mapStateToProps = ({
  session: { userId, userName, userRole },
  menuItems,
  cart,
  cartItems
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
});

function Cart({ cart, userName, cartItems }) {
  let item = "Your Cart is Empty";
  if (cart) {
    item = cart._id;
  }

  return (
    <div className="cart-body">
      <Container className="cart-container">
        <Row>
          <Col xs={8}>
            <Container className="cart-container">
              <h3>Hello {userName}</h3>
              <h4>Cart</h4>
              {cartItems && cartItems.cartItems.map((item) => (
                <div>{item.name}</div>
              ))}
              {!cart && (<div key={item._id}>{item}</div>)}
            </Container>
          </Col>
          <Col xs={4}>
            <Container className="cart-container">
              <Card.Body>
                <Card.Title>Order Now</Card.Title>
              </Card.Body>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
