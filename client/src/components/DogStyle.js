import styled from "styled-components";

export const DogDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6vw;
  background-color: rgba(0, 0, 0, 0.45);
  color: white;
  width: 22.9vw;
  height: 35vh;
  justify-content: space-around;
  transition: all .2s ease-in-out;
  border-radius: 1vw;
  border: solid 0.1vw #ff8789;

  & #name{
    width: 23vw;
    height: 7vh;
    & h1{
    font-size: 1.2vw;
    }
  }

  & #imgTemperaments {
    width: 21vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    aling-items: center;
    justify-content: center;
    padding-left: 1vw;
    padding-right: 1vw;

    & #dogImg{
      border-radius: 1vw;
      object-fit: cover;
      width: 10vw;
      height: 10vw;
      margin-right: 1vw;
    }
    
    & p{
      padding: 0;
      font-size: .9vw;
    }
  }

  & #weight{
    width: 23vw;
    height: 7vh;

    & p{
      font-size: 1vw;
    }
  }
`

export const LinkDiv = styled.div`
  position:absolute;
  width: 23vw;
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
    transform: scale(1.06);
}
`