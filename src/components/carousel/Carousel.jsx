import Slider from "react-slick";

import { useContext } from "react";
import { Context } from "../../store/Context";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import styles
import { CarouselContainer, StyledSlider, SlideStyle } from "./Carousel.style";

export default function Carousel({
  slidesToShow = 3,
  autoplay = true,
  speed = 2000,
}) {
  const { images } = useContext(Context);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    speed,
    autoplaySpeed: speed,
    cssEase: "linear",
  };

  console.log(images);

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {images &&
          images.map((image, index) => (
            <SlideStyle key={index}>
              <img src={image.src} alt={`slide-${index}`} />
            </SlideStyle>
          ))}
      </StyledSlider>
    </CarouselContainer>
  );
}
