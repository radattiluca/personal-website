import styled from "styled-components";
import Slider from "react-slick";

//import components
import Carousel from "./Carousel.jsx";

export const StyledContainerCarousel = styled(Carousel)`
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 20px 0 20px 0;
  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    width: 40%;
    margin: auto;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 40%;
    margin: auto;
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    width: 70%;
    margin: auto;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 24px;
    color: red;
  } */

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

export const SlideStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 40px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
