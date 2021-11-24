import styled from "styled-components";

export const HomeDiv = styled.div`
  margin-top: 8vw;

  -webkit-animation: fadein 1s;
  animation: fadein 1s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  & #searchBar{
    position: fixed;
    right: 1vw;
    top: 3.2vw;
    border-radius: 0.5vw;
    border-color: #ff8789;
    font-size: 1vw;
  }

  & #searchT{
    border-radius: 0.5vw;
    border-color: #ff8789;
  }

  & #apiDb{
    z-index: 100;
    position: relative;
    top: -0.5vw;
    margin-left: 0.6vw;
    border-radius: 0.5vw;
    border-color: #ff8789;
  }

  & #order{
    position: absolute;
    right: 1vw;
    top: 7.6vw;
    color: white;
    font-size: 1vw;
    font-weight: bold;
    
    & select {
      border-radius: 0.5vw;
      border-color: #ff8789;
    }
  }

  & #containerD{
    display: flex;
    width: 30vw;
  }  

  & #off{
    z-index: 1000;
    background-color: rgba(151, 195, 206, .7);
    position: fixed;
    width: 15vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    top: 0;
    border-bottom-right-radius: 1vw;
    border-top-right-radius: 1vw;
    left: -15vw;
    transition: left 1s;

    & #cleanFilter {
      margin-left: 0.2vw;
      background-color: #ff8789;
      border-radius: 1vw;
      margin-bottom: 7vw;
    }

    & p{
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 0.3vw;
      padding-top: 0.1vw;
      padding-bottom: 0.3vw;
      padding-right: 0.5vw;
      padding-left: 0.5vw;
      color: white;
      font-weight: bold;
      margin: 0;
      margin-top: 7vw;
    } 
  }

  & #off:hover {
    left: 0;
  }

  & #menu{
    position: absolute;
    width: 2.1vw;
    height: 2vw;
    right: -2vw;
    top: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
    -webkit-filter: drop-shadow(0px 0px 2px black);
    filter:         drop-shadow(0px 0px 2px black);
    width: 1.5vw;
    height: 1.5vw;
    }
  }
`

export const ChecksDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  color: white;
  display: flex;
  flex-direction: column;
  border:2px solid #ccc;
  width: 14vw;
  height: 70vh;
  overflow-y: scroll;
  text-align: left;
  margin-top: 0.5vw;
  border-radius: 0.5vw;
  height: 60vh;

  ::-webkit-scrollbar{
    width: 0.5vw;
    border-left:
    1px solid #ff8789;
  }

  ::-webkit-scrollbar-thumb{
    background-color:#ff8789;
    border-radius: 1vw;
  }

  & .checkbox{
    appearance: none;
    width: 1vw;
    height: 1vw;
    background-color: transparent;
    border: 2px solid #ff8789;
    border-radius: 0.35vw;
  }

  .checkbox:checked {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #86c0ce;
    background: url(./img/square.png);
    background-size: contain;
    -webkit-filter: drop-shadow(0px 0px 4px #86c0ce);
    filter:         drop-shadow(0px 0x 4px #86c0ce);
  }

  & label{
    display: flex;
    margin-left: 0.5vw;
  }
`