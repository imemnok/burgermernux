import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image, { propTypes } from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../css/home.css";
import burger from "../static/Floating-burger-PNG.png";
import Banner from "./banner.component";
import { postFetch } from "../hooks/api";
// import { updateCart } from '../util/cart'
import { updateCart } from "../actions/cart";
import { getAllMenuItems } from "../actions/menu"
import { getMenuItem } from "../util/menu";

const imgSrc = "http://localhost:4001/images/";

const mapStateToProps = ({
  session: { userId, userName, userRole },
  menuItems,
  cart,
}) => ({
  userId,
  userName,
  userRole,
  menuItems,
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  updateCart: (cart) => dispatch(updateCart(cart)),
  getAllMenuItems: () => dispatch(getAllMenuItems())
});

function Home(props) {
  console.log(props);
  var menuItems = props.menuItems;
  var cart = props.cart;
  const handleOrder = (item) => {
    if (!props.userId) {
      console.log("Not Logged in");
      props.history.push('/login')
      // <Redirect to='/login' />
    } else {
      // console.log(cart);
      if (!cart || cart.active === false) {
        const newCart = {
          customer: props.userId,
          items: [{ item: item }],
          active: true,
        };
        props.updateCart(newCart);
      } else {
        const updatedCart = {
          _id: cart._id,
          customer: props.userId,
          items: [{ item: item }],
          active: true,
        };
        props.updateCart(updatedCart);
      }
    }
  };

  const deactivateCart = () => {
    console.log(cart);
    const oldCart = { ...cart, active: false };
    props.updateCart(oldCart);
  };

useEffect (()=> {
 props.getAllMenuItems()
},[])
  return (
    <>
      <Banner />
      <div className="more-body">
        <Container>
          <Row>
            {menuItems.map(
              (item) =>
                item.category === "burger" && (
                  <Col className="col-xs-1 more-body order-col" key={item.name}>
                    <Card key={item.name}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle>{item.price}</Card.Subtitle>
                        <Card.Body>{item.description}</Card.Body>
                        <div className="order-button">
                          <Button
                            className="center-button"
                            variant="primary"
                            size="sm"
                            onClick={() => handleOrder(item._id)}
                          >
                            Add To Cart
                          </Button>
                          {/* <Link to={{ pathname: '/cart', state: {item: item._id}}}>Order</Link> */}
                        </div>
                        <Card.Img
                          as={Image}
                          src={item.image ? imgSrc + item.image : burger}
                          fluid={true}
                          alt="Card Image"
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                )
            )}
          </Row>
          <Button onClick={() => deactivateCart()}>Deactivate</Button>
        </Container>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
