import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {

  return (
    <>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="activeMenu">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cards" activeClassName="activeMenu">
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" activeClassName="activeMenu">
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Menu