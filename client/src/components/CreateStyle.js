import styled from "styled-components";

export const CreateDiv = styled.div`
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