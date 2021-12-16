import React from "react";
import styled from "styled-components";

const Header = ({ text, bgText }) => {
  return (
    <Style text={bgText || text}>
      <h2>{text}</h2>
    </Style>
  );
};

export default Header;

const Style = styled.header`
  h2 {
    text-align: center;
    margin-bottom: 100px;
    position: relative;
    @supports (-webkit-text-stroke: 1px black) {
      ::after {
        content: "${({ text }) => text}";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        font-size: clamp(54px, 15vw, 144px);
        -webkit-text-stroke: 1px #dddddd;
        -webkit-text-fill-color: white;
        z-index: -1;
      }
    }
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  }
`;
