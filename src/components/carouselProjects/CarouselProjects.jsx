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

export default function CarouselProjects({ slidesToShow }) {
  const { slides } = useContext(Context);
  const { setExpandedTriangle } = useContext(Context);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {slides &&
          slides.map((slide, index) => (
            <SlideStyle key={index}>
              <img src={slide.src} alt={`slide-${index}`} />
            </SlideStyle>
          ))}
      </StyledSlider>
    </CarouselContainer>
  );
}
