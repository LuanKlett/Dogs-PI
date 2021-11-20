import React from "react";
import { NavLink}  from "react-router-dom"
import { Nav } from "./NavBarStyle"

export default function NavBar (){

  return (
    <Nav>
      <img id="db" src="./img/dogs_breeds2.png" />
      <div id="container">
        <NavLink
          to="/home"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "active")}
          >
          Home
      </NavLink>
        <NavLink
          to="/create"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")}
          >
          Create
      </NavLink>
    </div>
  </Nav>
  )
}