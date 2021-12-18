import React from "react";
import styled from "styled-components";
import Faq from "react-faq-component";

import Header from "../components/Header";
import PlusIcon from "../assets/img/icons/plus.svg";
import MinusIcon from "../assets/img/icons/minus.svg";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: "Do you have an app?",
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      },
      {
        title: "Can I play against other people?",
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      },
      {
        title: "How can I change the opponents faces and names?",
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      },
      {
        title: "How can I play many cards at once in Crazy Eights ?",
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      },
      {
        title: "What do green checkmarks mean on players and tables?",
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      },
    ],
  };

  return (
    <Style className="container" id="faq" data-aos="fade-up">
      <Header text="Frequently asked questions" bgText="FAQ" />
      <Faq data={data} />
    </Style>
  );
};

export default FAQ;

const Style = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  .faq-row-wrapper {
    .faq-body {
      .faq-row {
        background: #eaeaea;
        border-radius: 4px;
        border: none;
        margin-bottom: 12px;
        padding-left: 20px;
        padding-right: 20px;
        .row-title {
          color: #222222;
          font-family: "Montserrat SemiBold";
          font-size: calc(1.1rem + 0.3vw);
          font-weight: 600;
          ::after {
            content: url("${PlusIcon}");
          }
          &.expanded {
            color: #009432;
            ::after {
              content: url("${MinusIcon}");
            }
          }
          .icon-wrapper {
            display: none;
          }
        }

        .row-content {
          .row-content-text {
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 55px;
    padding-bottom: 55px;
  }
`;
