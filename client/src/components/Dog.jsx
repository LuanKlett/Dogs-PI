import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoading } from "../actions";
import { DogDiv, LinkDiv, HoverDiv } from "./DogStyle";

function Dog({ name, image, weight, temperament, id, setLoading }) {
  return (
    <HoverDiv>
    <DogDiv>
      <LinkDiv>
        <Link to={`/detail/${id}`} onClick={setLoading}/>
      </LinkDiv>
      <p>{name}</p>
      <img id="dogImg" src={image} />
      <p>{weight} kg</p>
      <p>{temperament}</p>
    </DogDiv>
    </HoverDiv>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: () => dispatch(setLoading()),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Dog);
