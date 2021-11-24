import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { StartDiv } from "./StartStyles";

export default function Start() {
  const history = useHistory();
  const [classEnter, setClassEnter] = useState("enter");
  const [opacity, setOpacity] = useState(1);
  function alternateClass() {
    if (classEnter === "enterA") {
      setClassEnter("enter");
    } else {
      setClassEnter("enterA");
    }
  }
  setTimeout(alternateClass, 1000);

  function handleClick(e) {
    e.preventDefault();
    setOpacity(0);
    setTimeout(() => history.push("/home"), 1500);
  }

  return (
    <StartDiv style={{ opacity: opacity }}>
      <img id="logo" src="./img/dogs_breeds2.png" />
      <Link to="/home" onClick={(e) => handleClick(e)}>
        <img id={classEnter} src="./img/enter.png" />
      </Link>
    </StartDiv>
  );
}
