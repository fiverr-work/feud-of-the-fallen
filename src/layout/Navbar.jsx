import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import { ReactComponent as Logo } from "../assets/img/logo/brand.svg";
import { ReactComponent as CloseIcon } from "../assets/img/icons/close.svg";
import { ReactComponent as Menu } from "../assets/img/icons/menu.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Style className={scroll ? "scroll" : ""}>
      <div className="container">
        <Brand>
          <Link to="/">
            {/* <Logo width="" height=""/> */}
            Joroh
          </Link>
        </Brand>
        <Links className={menu ? "show" : ""}>
          <CloseIcon className="close" onClick={() => setMenu(false)} />
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
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
  top: 10px;
  left: 0;
  right: 0;
  width: 100%;
  transition: top 200ms, background-color 200ms;

  /* Add transition to logo on scroll */
  /* .brand {
    transition: width 200ms, height 200ms;
  } */

  // on Scrole
  &.scroll {
    top: 0;
    background-color: #14191a;
    transition: top 200ms, background-color 200ms;
    /* .brand {
      width: 70px;
      height: 100px;
      transition: width 200ms, height 200ms;
    } */
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Brand = styled.div``;
const Links = styled.div``;
