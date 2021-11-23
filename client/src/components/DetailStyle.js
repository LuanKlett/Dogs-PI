import styled from "styled-components";

export const DetailDiv = styled.div`
  margin-top: 8vw;
  border-radius: 1vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 35vw;
  border: solid 0.2vw #ff8789;

  -webkit-animation: fadein 2s;
  animation: fadein 1s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  & h1{
    margin: 0;
    margin-bottom: 2vw;
    font-size: 3.5vw;
    color: white;
    -webkit-text-stroke: 2px black;
  }

  & #all{
    display: flex;
    align-items: center;
    margin-bottom: 1vw;
    
    
    & #text{
      color: white;
      display: flex;
      flex-direction: column;
      width: 25vw;
    }
  }

  & img{
    height: 25vw;
    width: 25vw;
    object-fit: cover;
    border-radius: 1vw;
  }
`