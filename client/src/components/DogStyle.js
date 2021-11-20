import styled from "styled-components";

export const DogDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.6vw;
  background-color: rgba(0, 0, 0, 0.5);
  width: calc(22.7vw - 3px);
  justify-content: space-around;

  & #dogImg{
    object-fit: cover;
    width: 10vw;
    height: 10vw;
  }
`