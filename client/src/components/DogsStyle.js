import styled from "styled-components";

export const DogsDiv = styled.div`
  border: solid 0.2vw #ff8789;
  border-radius : 1vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 1vw;
  width: 97.5vw;
`

export const BtnDiv = styled.div`
  position: relative;
  bottom: 0.5vw;
  z-index: 100;
  top: 0.1vw;

  & .btn{
    margin-left: 0.2vw;
    background-color: #ff8789;
    border-radius: 1vw;
  }

  & #active{
    background-color: #86c0ce;
    transform: scale(1.1)
  }

`