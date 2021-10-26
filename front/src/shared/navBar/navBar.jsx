import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.styles.css";

const NavBar = (props) => (
  <header className="nav-bar">
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

export default NavBar;