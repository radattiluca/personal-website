import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import styles
import { CarouselContainer, StyledSlider, SlideStyle } from "./Carousel.style";

// //import images
// import gitHubLogo from "../../assets/images/github.png";
// import cssLog from "../../assets/images/cssLogo.png";
// import htmlLogo from "../../assets/images/htmlLogo.png";
// import jsLogo from "../../assets/images/jsLogo.png";
// import tslogo from "../../assets/images/ts-logo.png";
// import reactLogo from "../../assets/images/react.svg";
// import sassLogo from "../../assets/images/sassIcon.png";
// import gitLogo from "../../assets/images/Git-Icon.png";

export default function Carousel({
  images,
  slidesToShow = 3,
  autoplay = true,
  speed = 2000,
}) {
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
