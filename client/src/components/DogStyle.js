import styled from "styled-components";

export const DogDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.6vw;
  background-color: rgba(0, 0, 0, 0.45);
  color: white;
  width: 19vw;
  height: 35vh;
  justify-content: space-around;
  transition: all .2s ease-in-out;
  border-radius: 1vw;

  & #dogImg{
    border-radius: 1vw;
    object-fit: cover;
    width: 10vw;
    height: 10vw;
  }
`

export const LinkDiv = styled.div`
  position:absolute;
  width: 19vw;
  height: 35vh;
  border-radius: 1vw;

  & a{
    border-radius: 1vw;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
`

export const HoverDiv = styled.div`
  
  & :hover{
    transform: scale(1.1);
}
`