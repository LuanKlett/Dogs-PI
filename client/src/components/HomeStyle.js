import styled from "styled-components";

export const HomeDiv = styled.div`
  margin-top: 7vw;

  & #searchBar{
    position: fixed;
    right: 3.7vw;
    top: 3.2vw;
  }

  & #select{
    position: absolute;
    right: 3.7vw;
    top: 4.9vw;
  }

  & #containerD{
    display: flex;
    width: 30vw;

    & #containerE{
      margin-left: 1vw;
      width: 14vw;
      display:flex;
      flex-direction: column;
      align-items: center;
    }

    & #checks {
      display: flex;
      flex-direction: column;
      border:2px solid #ccc;
      width: 14vw;
      height: 70vh;
      overflow-y: scroll;
      text-align: left;
    }
  }
`