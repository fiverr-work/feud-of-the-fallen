import React from "react";
import styled from "styled-components";

const Header = ({ text, bgText, revers }) => {
  return (
    <Style text={bgText || text} revers={revers}>
      <h2>{text}</h2>
    </Style>
  );
};

export default Header;

const Style = styled.header`
  position: relative;
  @supports (-webkit-text-stroke: 1px black) {
    ::before {
      content: "${({ text }) => text}";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      text-align: center;
      transform: translate(-50%, -55%);
      font-size: clamp(54px, 15vw, 144px);
      font-family: "Montserrat Black";
      -webkit-text-stroke: 1px ${({ revers }) => (revers ? "#333333" : "#dddddd")};
      -webkit-text-fill-color: ${({ revers }) => (revers ? "#222222" : "#ffffff")};
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 100px;
    position: relative;
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  }
`;
