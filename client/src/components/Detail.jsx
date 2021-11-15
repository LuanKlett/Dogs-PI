import React from "react";
import styled from "styled-components";

const DetailDiv = styled.div`

`

export default function Detail ({match}){
  const id = match.params.id;
  return (
    <DetailDiv>
      <h1>DETAIL</h1>
      <p>{id}</p>  
    </DetailDiv>
  )
}