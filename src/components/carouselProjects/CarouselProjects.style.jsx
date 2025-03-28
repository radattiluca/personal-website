import styled from "styled-components";
import Slider from "react-slick";

//import components
import Carousel from "./CarouselProjects";

export const StyledContainerCarousel = styled(Carousel)`
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 20px 0;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-prev {
    z-index: 1;
    width: 40px;
    height: 40px;
    left: 0px;

    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      left: 395px;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      left: 395px;
    }
  }
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    right: 0px;

    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      right: 355px;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      right: 355px;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 33px;
    color: #c0cbb6;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`;

export const SlideStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 80%;
    margin: auto;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }

    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      width: 30%;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      width: 30%;
    }
  }
`;
