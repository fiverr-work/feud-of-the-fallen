import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/img/logo/brand.png";
import { ReactComponent as CloseIcon } from "../assets/img/icons/close.svg";
import { ReactComponent as Menu } from "../assets/img/icons/menu.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Style>
      <div className="container">
        <Brand to="/">
          <img src={Logo} alt="Feud of the Fallen" />
        </Brand>
        <Links className={menu ? "show" : ""}>
          <CloseIcon className="close" onClick={() => setMenu(false)} />
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about" onClick={() => setMenu(false)}>
            About us
          </a>
          <Link to="/contact">Contact us</Link>
          <a href="#roadmap" onClick={() => setMenu(false)}>
            Roadmap
          </a>
          <a href="#faq" onClick={() => setMenu(false)}>
            FAQs
          </a>
          <a href="#" className="btn">
            Lunch Discord
          </a>
        </Links>
        <Menu className="menu" onClick={() => setMenu(true)} />
      </div>
    </Style>
  );
};

export default Navbar;

const Style = styled.nav`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: top 200ms, background-color 200ms;
  padding: 20px 0;
  border-bottom: 1px solid #333333;
  background-color: #222222;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    .menu {
      display: none;
    }
  }
`;
const Brand = styled(Link)`
  flex: 0.2;
`;
const Links = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  a {
    color: #fff;
    :not(.btn) {
      padding: 5px 12px;
      :hover {
        color: #009432;
      }
    }
    &.active {
      font-family: "Montserrat Bold";
      color: #009432;
      position: relative;
      ::before {
        content: "";
        background-color: #fff;
        opacity: 0.2;
        position: absolute;
        inset: 0;
        width: 63%;
        z-index: -1;
      }
    }
    :last-child {
      margin-left: auto;
    }
  }
  .close {
    display: none;
  }
  @media (max-width: 768px) {
    .close {
      display: block;
      position: relative;
      bottom: 10vh;
    }
    position: fixed;
    inset: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: #222222;
    z-index: 12;
    flex-direction: column;
    justify-content: center;
    a {
      margin: 15px auto;
    }
    .btn {
      margin-top: 25px;
    }
    &.show {
      left: 0;
    }
  }
`;
