import styled from "styled-components";


export const StartDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(./img/startwallpaper2.jpg);
  background-size: 42vw;
  transition: all 1.5s ease-out;

  & #enter{
    z-index: 100;
    position: fixed;
    width: 8vw;
    cursor: pointer;
    top: 50vh;
    right: 47vw;
    transition: all 0.2s ease-out;

    -webkit-filter: drop-shadow(10px 10px 10px black);
    filter:         drop-shadow(10px 10px 10px black);
  }

  & #enter:hover{
    transform: scale(1.2)
  }

  & #enterA{
    z-index: 100;
    position: fixed;
    width: 8vw;
    cursor: pointer;
    top: 50vh;
    right: 47vw;
    transition: all 0.2s ease-out;

    -webkit-filter: drop-shadow(10px 10px 20px white);
    filter:         drop-shadow(10px 10px 20px white);
  }

  & #enterA:hover{
    transform: scale(1.2)
  }

  & #logo{
    z-index: 1;
    width: 50vw;
    position: fixed;
    left: 22vw;
    top: 28vh;

    -webkit-filter: drop-shadow(10px 10px 30px black);
    filter:         drop-shadow(10px 10px 30px black);
  }
`