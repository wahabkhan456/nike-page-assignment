import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

export default function NavItem(props) {
  return (
    <li className={props.class ? props.class : "nav-link"}>
      <NavLink to="/" exact>
        {props.children}
      </NavLink>
    </li>
  );
}
