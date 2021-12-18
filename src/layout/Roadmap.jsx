import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const Col = ({ date, text, ...rest }) => (
  <ColStyle {...rest}>
    <h6>{date}</h6>
    <span></span>
    <span></span>
    <p>{text}</p>
  </ColStyle>
);
const ColStyle = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 251px;

  span {
    :nth-of-type(1) {
      height: 20px;
      width: 20px;
      border-radius: 20px;
      background: #009432;
      margin-top: 32px;
      margin-bottom: 24px;
    }
    :nth-of-type(2) {
      height: 51px;
      width: 1px;
      background-color: #666666;
      margin-bottom: 18px;
    }
  }
  &:last-of-type {
    span {
      :nth-of-type(1) {
        outline: 1px solid #009432;
        outline-offset: 8px;
      }
    }
  }
`;

const Roadmap = () => {
  const steps = [
    {
      date: "September 2021",
      text: "Simply dummy text",
    },
    {
      date: "October 2021",
      text: "Printing and typesetting industry",
    },
    {
      date: "November 2021",
      text: "Printer took a galley of type and scrambled",
    },
    {
      date: "December 2021",
      text: "Make a type specimen book",
    },
    {
      date: "January 2022",
      text: "Printing and typesetting industry",
    },
  ];
  return (
    <Style id="roadmap">
      <div className="container" data-aos="fade-up">
        <Header revers text="Our Roadmap" bgText="Roadmap" />
        <div>
          <hr />
          {steps.map((step, index) => (
            <Col key={index} date={step.date} text={step.text} />
          ))}
        </div>
      </div>
    </Style>
  );
};

export default Roadmap;

const Style = styled.section`
  padding-top: 100px;
  padding-bottom: 90px;
  background-color: #222222;
  * {
    color: #ffffff;
  }
  > .container > div {
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
    hr {
      position: absolute;
      left: 0;
      right: 0;
      top: 60px;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      ::before,
      ::after {
        content: "";
        height: 9px;
        width: 9px;
        border-radius: 9px;
        background-color: #ffffff;
        position: absolute;
        top: -4px;
      }
      ::before {
        left: 0;
      }
      ::after {
        right: 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }
`;
