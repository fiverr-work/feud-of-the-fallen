import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import { ReactComponent as ScrollIcon } from "../assets/img/icons/scroll.svg";
import { ReactComponent as ArrowPrev } from "../assets/img/icons/arrow-right.svg";
import { ReactComponent as ArrowNext } from "../assets/img/icons/arrow-left.svg";
import Cards from "../assets/img/cards.png";

const SliderItem = () => (
  <SliderStyle>
    <div>
      <span>02 / 04</span>
      <h1>FEUD OF THE FALLEN</h1>
      <button className="btn secondary">Play Now</button>
    </div>
    <div>
      <img src={Cards} alt="" />
    </div>
  </SliderStyle>
);

const SliderStyle = styled.div`
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

const Hero = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <button>
        <ArrowNext />
      </button>
    ),
    prevArrow: (
      <button>
        <ArrowPrev />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  return (
    <Style id="hero">
      <div className="container">
        <Slider {...settings}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </Slider>
      </div>
      <ScrollIcon />
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
  > svg {
    pointer-events: none;
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      display: none;
    }
  }
  .container,
  .slick-slider {
    min-height: 100vh;
  }
  .slick-slider {
    display: flex;
    align-items: center;
  }
  .slick-dots {
    bottom: 37px;
    li {
      opacity: 1;
      background: #333333;
      width: auto;
      height: auto;
      button {
        height: 4px;
        width: 16px;
        padding: 0;
        :before {
          content: "";
          width: 100%;
          height: 100%;
        }
      }
      &.slick-active button:before {
        background: #009432;
      }
    }
  }
  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: 0;
  }
  .slick-arrow {
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: #009432;
    height: 34px;
    width: 34px;
    z-index: 2;
    @media (max-width: 768px) {
      svg {
        transform: rotate(-90deg);
      }
    }
    ::before {
      display: none;
    }
    &.slick-disabled {
      background: #333333;
      cursor: not-allowed;
    }
  }
  @media (min-width: 768px) {
    .slick-arrow {
      top: auto;
      left: 0;
    }
    .slick-next {
      bottom: 50px;
    }
    .slick-prev {
      bottom: 110px;
    }
    .slick-dots {
      right: -20px;
      top: 50%;
      bottom: auto;
      width: auto;
      transform: rotate(90deg);
    }
  }
`;
