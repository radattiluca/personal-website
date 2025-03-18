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
    left: 15px;
    rotate: -90deg;
  }
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    right: -25px;
    rotate: -90deg;
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
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
