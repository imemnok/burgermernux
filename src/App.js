// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { AuthRoute, ProtectedRoute } from "./util/route";
// import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import { logout } from "./actions/session";


// import "react-animated-slider/build/horizontal.css";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/menu.component";
import Order from "./components/order.component";
import Cart from "./components/cart.component";
import Add from "./components/admin_add.component";
import Register from "./components/register.component";
import Login from "./components/login.component";
import Banner from "./components/banner.component";
import Home from "./components/home.component"
import homeComponent from "./components/home.component";

const mapStateToProps = ({ session: { userId, userName, userRole}, menuItems, cart}) => ({
  userId, userName, userRole, menuItems, cart
});
// console.log(menuItems)
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
function App({userId, userName, userRole, logout }) {
  return (
    <Router>
      <div className="container">
        <header>
          <Navbar expand="lg">
            <Navbar.Brand href="/">BurgerBurger</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item" key="home">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item" key="menu">
                  <Link to="/menu" className="nav-link">
                    Menu
                  </Link>
                </li>
                 {/* <li className="navbar-item" key="order">
                  <Link to="/order" className="nav-link">
                    Order
                  </Link>
                </li> */}
                <li className="navbar-item" key="cart">
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                </li>
                {!userId && (
                  <li className="navbar-item" key="register">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                )}
                {!userId && (
                  <li className="navbar-item" key="login">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                )}
                {userId && (
                  <li className="navbar-item" key="logout">
                    <Link to="" onClick={logout} className="nav-link">
                      Logout
                      </Link>
                  </li>
                )}
                {(userId && userRole === "Admin") && (
                  <li className="navbar-item" key="add">
                    <Link to="/add" className="nav-link">
                      Add
                    </Link>
                  </li>
                )}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <br />

        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        {/* <ProtectedRoute path="/order" component={Order} /> */}
        <Route path="/cart" component={Cart} />
        <ProtectedRoute path="/add" component={Add} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
