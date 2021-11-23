import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getDetail } from "../actions"
import Loading from "./Loading"
import { DetailDiv } from "./DetailStyle"

function Detail ({match, detail, getDetail, loading}){
  const id = match.params.id;
  
  useEffect(() => {
    getDetail(id)
  }, [])
  console.log(detail)
  return (
    loading ? <Loading />: (<center><DetailDiv>
      <h1>{detail.name}</h1>
      <div id="all">
        <img src={detail.image} alt={detail.name}/>
        <div id="text">
          <p>Weight: {detail.weight} kg</p>
          <p>Height: {detail.height} cm</p>
          <p>Temperaments: {detail.temperament}</p>
          <p>Life Span: {detail.life_span}</p>
        </div>
      </div>

    </DetailDiv></center>)
  )
}

function mapStateToProps(state) {
  return {
    detail: state.detail,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: id => dispatch(getDetail(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);