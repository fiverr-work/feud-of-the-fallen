import React from "react";
import styled from "styled-components";

import { ReactComponent as ScrollIcon } from "../assets/img/icons/scroll.svg";
import Cards from "../assets/img/cards.png";

const Hero = () => {
  return (
    <Style id="hero">
      <div className="container">
        <Content data-aos="fade-up">
          <div>
            <span>02 / 04</span>
            <h1>FEUD OF THE FALLEN</h1>
            <button className="btn secondary">Play Now</button>
          </div>
          <div>
            <img src={Cards} alt="" />
          </div>
        </Content>
      </div>
      <a href="#about">
        <ScrollIcon />
      </a>
    </Style>
  );
};

export default Hero;

const Style = styled.header`
  min-height: 100vh;
  background-color: #222222;
  position: relative;
  display: flex;
  align-items: center;
  * {
    color: #ffffff;
  }
  > a {
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translateX(-50%);
    animation-name: bounce;
    animation-timing-function: ease-in;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    @media (max-width: 768px) {
      display: none;
    }
  }
  @keyframes bounce {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 5vw;
  margin-right: 5vw;
  h1 {
    margin-bottom: 64px;
  }
  > div {
    position: relative;
    span {
      position: absolute;
      top: 23%;
      left: -5vw;
      transform: rotate(-90deg);
      font-size: 14px;
      line-height: 1;
      ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: calc(-100% - 15px);
        width: 34px;
        height: 1px;
        background-color: #ffffff;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    :first-child {
      flex: 0.6;
    }
    :last-child {
      flex: 1;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;
