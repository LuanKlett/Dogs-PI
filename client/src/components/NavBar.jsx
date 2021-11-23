import React from "react";
import { NavLink, useLocation }  from "react-router-dom"
import { connect } from "react-redux";
import { setLoading } from "../actions";
import { Nav } from "./NavBarStyle"

function NavBar ({ setLoading }){
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Nav>
      <img id="db" src={pathname.includes("/detail/") ? "../img/dogs_breeds2.png" : "./img/dogs_breeds2.png"} />
      <div id="container">
        <NavLink
          to="/home"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "active")}
          onClick={setLoading}
          >
          Home
      </NavLink>
        <NavLink
          to="/create"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")}
          >
          Add
      </NavLink>
    </div>
  </Nav>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: () => dispatch(setLoading()),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NavBar);