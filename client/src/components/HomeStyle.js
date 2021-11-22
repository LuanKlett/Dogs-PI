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
    right: 3.7vw;
    top: 3.2vw;
  }

  & #apiDb{
    z-index: 100;
    position: absolute;
    top: 7.5vw;
    right: 40.7vw;
  }

  & #order{
    position: absolute;
    right: 3.7vw;
    top: 4.9vw;
  }

  & #containerD{
    display: flex;
    width: 30vw;
    margin-top: 9.6vw;

    & #containerE{
      margin-left: 1vw;
      width: 14vw;
      display:flex;
      flex-direction: column;
      align-items: center;

      & #cleanFilter {
        margin-top: 0.5vw;
      }

      & p{
        background-color: rgba(0, 0, 0, 0.45);
        border-radius: 0.3vw;
        padding-top: 0.1vw;
        padding-bottom: 0.3vw;
        padding-right: 0.5vw;
        padding-left: 0.5vw;
        color: white;
        font-weight: bold;
        margin: 0;
      }
    }

    & #checks {

      background-color: rgba(0, 0, 0, 0.45);
      color: white;
      display: flex;
      flex-direction: column;
      border:2px solid #ccc;
      width: 14vw;
      height: 70vh;
      overflow-y: scroll;
      text-align: left;
      margin-top: 0.5vw;
    }
  }
`