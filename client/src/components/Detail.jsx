import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getDetail } from "../actions"
import Loading from "./Loading"
import styled from "styled-components";

const DetailDiv = styled.div`
  margin-top: 7vw;

  -webkit-animation: fadein 2s;
  animation: fadein 1s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

function Detail ({match, detail, getDetail, loading}){
  const id = match.params.id;
  
  useEffect(() => {
    getDetail(id)
  }, [])
  console.log(detail)
  return (
    loading ? <Loading />: (<DetailDiv>
      <h1>{detail.name}</h1>
      <img src={detail.image} alt={detail.name}/>
      <p>{detail.weight} kg</p>
      <p>{detail.height} cm</p>
      <p>{detail.temperament}</p>
      <p>{detail.life_span}</p>

    </DetailDiv>)
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