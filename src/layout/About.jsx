import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Img from "../assets/img/dullahan.png";

const About = () => {
  return (
    <Style className="container">
      <Header text="About Us" />
      <div>
        <div>
          <img src={Img} alt="dullahan" />
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
      </div>
    </Style>
  );
};

export default About;

const Style = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;

  > div {
    display: flex;
    align-items: center;
    > * {
      flex: 1;
    }
  }
  p {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 50px;

    > div {
      flex-direction: column;
    }
  }
`;
