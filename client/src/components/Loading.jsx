import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SpinDiv = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;

  -webkit-animation: fadein 0.5s;
  animation: fadein 0.5s;
  @keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  .loader {
    --color: #ff8789;
    --size-mid: 6vmin;
    --size-dot: 1.5vmin;
    --size-bar: 0.4vmin;
    --size-square: 3vmin;

    display: block;
    position: relative;
    width: 50%;
    display: grid;
    place-items: center;
  }

  .loader::before, .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
  }

  .loader.--1::before {
    width: var(--size-mid);
    height: var(--size-mid);
    border: 4px solid var(--color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: loader-1 1s linear infinite;
  }

  .loader.--1::after {
    width: calc(var(--size-mid) - 2px);
    height: calc(var(--size-mid) - 2px);
    border: 2px solid transparent;
    border-top-color: var(--color);
    border-radius: 50%;
    animation: loader-1 0.6s linear reverse infinite;
  }

  @keyframes loader-1 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default function Loading() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <SpinDiv>
      <div className="item">
        <i className="loader --1"></i>
      </div>
    </SpinDiv>
  );
}
