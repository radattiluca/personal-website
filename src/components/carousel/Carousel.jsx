import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import styles
import { CarouselContainer, StyledSlider, SlideStyle } from "./Carousel.style";

//import images
import gitHubLogo from "../../assets/images/github.png";
import cssLog from "../../assets/images/cssLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import jsLogo from "../../assets/images/jsLogo.png";
import tslogo from "../../assets/images/ts-logo.png";
import reactLogo from "../../assets/images/react.svg";
import sassLogo from "../../assets/images/sassIcon.png";
import gitLogo from "../../assets/images/Git-Icon.png";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        <SlideStyle>
          <img src={tslogo} alt="" />
        </SlideStyle>

        <SlideStyle>
          <img src={cssLog} alt="" />
        </SlideStyle>
        <SlideStyle>
          <img src={htmlLogo} alt="" />
        </SlideStyle>
        <SlideStyle>
          <img src={jsLogo} alt="" />
        </SlideStyle>
        <SlideStyle>
          <img src={reactLogo} alt="" />
        </SlideStyle>
        <SlideStyle>
          <img src={sassLogo} alt="" />
        </SlideStyle>
        <SlideStyle>
          <img src={gitLogo} alt="" />
        </SlideStyle>
      </StyledSlider>
    </CarouselContainer>
  );
}
