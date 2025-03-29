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
      &:hover {
        opacity: 9;
      }
      left: 395px;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      left: 395px;
      &:hover {
        opacity: 9;
      }
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

      &:hover {
        opacity: 9;
      }
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      right: 355px;
      &:hover {
        opacity: 9;
      }
    }
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 33px;
    color: #004138;
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
    transition: transform 0.4s ease-in-out;
    border-radius: 8px;
    cursor: pointer;
    opacity: 1;

    &:hover {
      transition: all 0.7s ease-in-out;
      transform: scale(0.9);
      opacity: 0.9;
    }

    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      width: 50%;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      width: 50%;
    }

    /* Tablet in vertical mode and landscape mode */
    @media all and (min-width: 481px) and (max-width: 1279px) {
      width: 50%;
    }
  }
`;
