import styled from "styled-components";

export const CreateDiv = styled.div`
  margin-top: 7vw;

  -webkit-animation: fadein 1s;
  animation: fadein 1s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  ul {
    list-style-type: none;
  }

  & .danger {
    border-color: red;
  }

  & .danger:focus{
    outline: none;
  }

  & .input:focus{
    outline-color: cyan;
  }

  & #container {
    border:2px solid #ccc;
    width:300px;
    height: 100px;
    overflow-y: scroll;
  }
`