import Slider from "react-slick";

import { useContext, useEffect, useState } from "react";
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
  const { openLinksProject, setOpenLinksProject } = useContext(Context);
  const { dotsShow, setDotsShow } = useContext(Context);
  const [opacityImage, setOpacityImage] = useState(1);

  useEffect(() => {
    console.log("cambiamo l'opacità");
    if (openLinksProject) {
      setOpacityImage(0.5); // Cambia opacità immagine quando uno degli stati è true
    } else {
      setOpacityImage(1); // Ritorna al opacità immagine originale se tutti sono falso
    }
  }, [openLinksProject]);
  const settings = {
    dots: dotsShow,
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
              <img
                src={slide.src}
                alt={`slide-${index}`}
                style={{ opacity: opacityImage }}
                onClick={() => {
                  setOpenLinksProject((curr) => !curr);
                  setDotsShow((curr) => !curr);
                }}
              />
              {openLinksProject && (
                <StyledDetailsCards
                  repository={slide.repository}
                  link={slide.link}
                  pdf={slide.pdf}
                ></StyledDetailsCards>
              )}
            </SlideStyle>
          ))}
      </StyledSlider>
    </CarouselContainer>
  );
}
