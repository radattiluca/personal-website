import { Link, Element } from "react-scroll";

//import store
import { Context } from "../../store/Context";
import { useContext, useEffect, useState } from "react";

//import styles
import {
  StyledBodyHome,
  StyledContainerImage,
  StyledContainerSectionProjects,
  StyledContainerSectionSocial,
  StyledContainerCarouselProjects,
  StyledContainerSectionQuestions,
  StyledContainerText,
  StyledContainerQuestions,
  StyledButtonCloseInfo,
  StyledContainerSectionCarousel,
  StyledContainerSectionContact,
  StyledContainerContact,
} from "./BodyHome.style";
import { StyledContainerCarousel } from "../carousel/Carousel.style";
import { StyledContainerQ } from "../containerQuestions/ContainerQuestions.style";
import { StyledForm } from "../form/Form.style";
import { StyledNavbar } from "../navbar/Navbar.style";
import { StyledFooter } from "../footer/Footer.style";

//import images
import emailLogo from "../../assets/images/email.gif";
import linkedinLogo from "../../assets/images/linkedinLogo.svg";
import gitHubLogo from "../../assets/images/gitHubLogo.svg";
import cssLog from "../../assets/images/cssLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import jsLogo from "../../assets/images/jsLogo.png";
import logoPortfolio from "../../assets/images/projectsIcon.png";
import questions from "../../assets/images/questions.png";
import iconX from "../../assets/images/iconX.png";
import tslogo from "../../assets/images/ts-logo.png";
import reactLogo from "../../assets/images/react.svg";
import sassLogo from "../../assets/images/sassIcon.png";
import gitLogo from "../../assets/images/Git-Icon.png";

import imageHome from "../../assets/images/ImageHome.svg";

//import images projects
import htmlcssImage from "../../assets/images/Html&Css.png";
import jsBasic from "../../assets/images/JsBasic.png";
import jsAdvanced from "../../assets/images/JsAdvanced.png";
import tsProject from "../../assets/images/TypeScript.png";
import reactProject from "../../assets/images/React.png";
import finalProject from "../../assets/images/Final.png";

import Carousel from "../carousel/Carousel";
import CarouselProjects from "../carouselProjects/CarouselProjects";

function BodyHome({ className, children }) {
  const { images, setImages } = useContext(Context);
  const { slides, setSlides } = useContext(Context);
  const { openQuestions, setOpenQuestions } = useState(false);

  const arraySlides = [
    {
      src: htmlcssImage,
      alt: "html e css image project",
    },
    {
      src: jsBasic,
      alt: "js Basic image project",
    },
    {
      src: jsAdvanced,
      alt: "js Advanced image project",
    },
    {
      src: tsProject,
      alt: "type script image project",
    },
    {
      src: reactProject,
      alt: "react image project",
    },
    {
      src: finalProject,
      alt: "final image project",
    },
  ];

  const arrayImages = [
    { src: tslogo, alt: "TypeScript" },
    { src: cssLog, alt: "CSS" },
    { src: htmlLogo, alt: "HTML" },
    { src: jsLogo, alt: "JavaScript" },
    { src: reactLogo, alt: "React" },
    { src: sassLogo, alt: "SASS" },
    { src: gitLogo, alt: "Git" },
  ];

  useEffect(() => {
    setImages(arrayImages);
    console.log(images);
    setSlides(arraySlides);
  }, []);

  const { openInfo, setOpenInfo } = useContext(Context);

  return (
    <div className={className}>
      <StyledNavbar></StyledNavbar>
      <StyledContainerSectionSocial>
        <a href="https://github.com/radattiluca" target="_blank">
          <img src={gitHubLogo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/radatti-luca/" target="_blank">
          <img src={linkedinLogo} alt="logo linkedin" />
        </a>
      </StyledContainerSectionSocial>
      <StyledContainerImage>
        <img src={imageHome} alt="picture keyboard with hands" />
      </StyledContainerImage>
      <StyledContainerText>
        <h2>BENVENUTI!</h2>
        <p>
          Sono <span>LUCA</span>, sono un aspirante <span>FRONT END</span> e
          <span> UX/UI DESIGNER </span>
          amo esprimere la mia creatività attraverso il digitale.
        </p>
      </StyledContainerText>

      <StyledContainerSectionCarousel>
        <h3>LE MIE SKILLS</h3>
        <StyledContainerCarousel>
          <Carousel slidesToShow={4} autoplay={true} speed={3000} />
        </StyledContainerCarousel>
      </StyledContainerSectionCarousel>

      <Element id="carouselWorks">
        <StyledContainerSectionProjects>
          <h3>I MIEI LAVORI</h3>
          <h4>Scorri la selezione per vedere l'anteprima dei miei progetti</h4>
          <StyledContainerCarouselProjects>
            <CarouselProjects />
          </StyledContainerCarouselProjects>
        </StyledContainerSectionProjects>
      </Element>

      <Element id="questions">
        <StyledContainerSectionQuestions>
          <h3>DOMANDE FREQUENTI</h3>
          <StyledContainerQuestions>
            <StyledContainerQ></StyledContainerQ>
          </StyledContainerQuestions>
        </StyledContainerSectionQuestions>
      </Element>

      <Element id="form">
        <StyledContainerSectionContact>
          <h3>CONTATTAMI</h3>
          <StyledContainerContact>
            <StyledForm></StyledForm>
          </StyledContainerContact>
        </StyledContainerSectionContact>
      </Element>
      <StyledFooter></StyledFooter>
    </div>
  );
}

export default BodyHome;
