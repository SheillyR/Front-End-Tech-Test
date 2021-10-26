import React from "react";
import { NavLink } from "react-router-dom";
import "./mainNavigation.styles.css";

const MainNavigation = (props) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;