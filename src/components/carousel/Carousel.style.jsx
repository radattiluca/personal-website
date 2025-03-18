import styled from "styled-components";
import Slider from "react-slick";

//import components
import Carousel from "./Carousel.jsx";

export const StyledContainerCarousel = styled(Carousel)`
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
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
