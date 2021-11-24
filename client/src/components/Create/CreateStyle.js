import styled from "styled-components";

export const CreateDiv = styled.div`
  margin-top: 8vw;
  border: solid 0.2vw #ff8789;
  border-radius: 1vw;
  width: 50vw;
  background-color: rgba(151, 195, 206, 0.4);

  & #ulInputs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
  }

  -webkit-animation: fadein 1s;
  animation: fadein 1s;
  @keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  ul {
    list-style-type: none;
  }

  & #container {
    border: 2px solid #ccc;
    width: 300px;
    height: 100px;
    overflow-y: scroll;
  }

  & .inputNumber {
    width: 3vw;
  }

  & .dangerNumber {
    border-color: red;
    width: 3vw;
  }

  & .dangerNumber:focus {
    outline: none;
  }

  & .dangerText {
    border-color: red;
  }

  & .dangerText:focus {
    outline: none;
  }

  & .input:focus {
    outline-color: cyan;
  }

  & input {
    border-radius: 0.5vw;
  }

  & #submitBtn {
    margin-bottom: 1vw;
    & input {
      background-color: #ff8789;
      border-radius: 1vw;
      border-color: darkGray;
    }
  }

  & #pic {
    width: 12vw;
    height: 12vw;
    border-radius: 1vw;
    border: solid 0.2vw black;

    & img {
      border-radius: 1vw;
      object-fit: cover;
      width: 12.1vw;
      height: 12.1vw;
      margin-left: -0.06vw;
      margin-top: -0.05vw;
    }
  }

  & #temperaments {
    margin: 0;
    padding: 0;
    margin-top: -1.3vw;
    margin-bottom: 0;
  }

  & #inputs {
    width: 12vw;
    margin-top: -1.3vw;
  }

  & .error {
    height: 0.8vw;
    font-size: 0.7vw;
    color: red;
  }
`;
