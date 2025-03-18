import Slider from "react-slick";

import { useContext } from "react";
import { Context } from "../../store/Context";
import { Link } from "react-router-dom";

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
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {slides &&
          slides.map((slide, index) => (
            <Link
              to={"/projects"}
              onClick={() => setExpandedTriangle((curr) => !curr)}
            >
              <SlideStyle key={index}>
                <img src={slide.src} alt={`slide-${index}`} />
              </SlideStyle>
            </Link>
          ))}
      </StyledSlider>
    </CarouselContainer>
  );
}
