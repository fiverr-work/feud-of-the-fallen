import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/img/logo/brand.png";
import Img from "../assets/img/dullahan.png";
import { ReactComponent as FacebookIcon } from "../assets/img/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/img/icons/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../assets/img/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/img/icons/instagram.svg";

const Footer = () => {
  const social = [
    {
      link: ``,
      icon: FacebookIcon,
    },
    {
      link: ``,
      icon: TwitterIcon,
    },
    {
      link: ``,
      icon: LinkedinIcon,
    },
    {
      link: ``,
      icon: InstagramIcon,
    },
  ];
  return (
    <Style>
      <div className="container">
        <Topfooter>
          <img src={Logo} alt="Feud of the Fallen" />
          <div>
            {social.map((Item, index) => (
              <a href={Item.link} key={index}>
                <Item.icon />
              </a>
            ))}
          </div>
        </Topfooter>
        <Prefooter>
          <p className="small">Copyright © 2021 feud of the fallen. All rights reserved</p>
          <div>
            <a href="#">About us</a>
            <Link to="/contact">Contact Us</Link>
            <a href="#">Roadmap</a>
            <a href="#">FAQs</a>
          </div>
        </Prefooter>
      </div>
    </Style>
  );
};

export default Footer;

const Style = styled.footer`
  background-color: #222222;
  padding-top: 60px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

const Topfooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  > div {
    display: flex;
    a {
      display: inline-block;
      width: 34px;
      height: 34px;
      background-color: #333333;
      transition: background-color 200ms;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;
      :hover {
        background-color: #242424;
        transition: background-color 200ms;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      margin-top: 24px;
    }
  }
`;

const Prefooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  color: #fff;
  border-top: 1px solid #333333;
  * {
    color: #fff;
    font-size: 0.75rem;
  }
  a {
    padding: 5px 15px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    a {
      padding: 5px 12px;
    }
    p {
      margin-top: 20px;
      line-height: 1.3;
    }
  }
`;
