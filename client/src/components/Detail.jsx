import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getDetail } from "../actions"
import styled from "styled-components";

const DetailDiv = styled.div`

`

function Detail ({match, detail, getDetail}){
  const id = match.params.id;
  
  useEffect(() => {
    getDetail(id)
  }, [])
  
  return (
    <DetailDiv>
      <h1>DETAIL</h1>
      <p>{detail?detail.name:null}</p>  
    </DetailDiv>
  )
}

function mapStateToProps(state) {
  return {
    detail: state.detail
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