import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoading } from "../../actions";
import { DogDiv, LinkDiv, HoverDiv } from "./DogStyle";

function Dog({ name, image, weight, temperament, id, setLoading }) {
  return (
    <HoverDiv>
      <DogDiv>
        <LinkDiv>
          <Link to={`/detail/${id}`} onClick={setLoading} />
        </LinkDiv>
        <div id="name">
          <h1>{name}</h1>
        </div>
        <div id="imgTemperaments">
          <img id="dogImg" src={image} />
          <p>
            Temperaments:
            <br />
            {temperament}
          </p>
        </div>
        <div id="weight">
          <p>Weight: {weight} kg</p>
        </div>
      </DogDiv>
    </HoverDiv>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: () => dispatch(setLoading()),
  };
}

export default connect(null, mapDispatchToProps)(Dog);
