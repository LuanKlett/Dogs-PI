import styled from "styled-components";

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.4);
  height: 6vw;
  top: 0;
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;

  & #db{
    top: -0.8vw;
    position: absolute;
    left: 0.5vw;
    width: 30vw;
  }

  & #container{
    width: 11vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & .unselected{
    background-color: transparent;
    border: groove #ff8789;
    border-radius: 0.5vw;
    width: 5vw;
    color: white;
    font-size: 1.5vw;
    font-weight: bold;
    text-decoration: none;
  }

  & .active{
    background-color: transparent;
    border: groove #ff8789;
    border-radius: 0.5vw;
    width: 5vw;
    color: #ff8789;
    font-size: 1.5vw;
    font-weight: bold;
    text-decoration: none;
  }
`