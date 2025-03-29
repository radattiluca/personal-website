import Slider from "react-slick";

import { useContext } from "react";
import { Context } from "../../store/Context";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import styles
import {
  CarouselContainer,
  StyledSlider,
  SlideStyle,
} from "./CarouselProjects.style";
import { StyledDetailsCards } from "../detailsCards/DetailsCard.style";

export default function CarouselProjects({ slidesToShow }) {
  const { slides } = useContext(Context);
  const { setExpandedTriangle } = useContext(Context);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1689,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1279,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {slides &&
          slides.map((slide, index) => (
            <SlideStyle key={index}>
              <img src={slide.src} alt={`slide-${index}`} />
              {/* <p>{slide.link}</p>
              <p>{slide.repository}</p> */}
              {/* <StyledDetailsCards></StyledDetailsCards> */}
            </SlideStyle>
          ))}
      </StyledSlider>
    </CarouselContainer>
  );
}
