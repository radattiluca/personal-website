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
  StyledSectionTopDesktop,
} from "./BodyHome.style";
import { StyledContainerCarousel } from "../carousel/Carousel.style";
import { StyledContainerQ } from "../containerQuestions/ContainerQuestions.style";
import { StyledForm } from "../form/Form.style";
import { StyledNavbar } from "../navbar/Navbar.style";
import { StyledFooter } from "../footer/Footer.style";

//import images

import linkedinLogo from "../../assets/images/linkedinLogo.svg";
import gitHubLogo from "../../assets/images/gitHubLogo.svg";
import cssLog from "../../assets/images/cssLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import jsLogo from "../../assets/images/jsLogo.png";
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

//import pdf projects
import project1PDF from "../../assets/pdf/Presentazione_Luca_Radatti_Website.pdf";
import project2PDF from "../../assets/pdf/Presentazione_Progetto_JavaScript_Luca_Radatti.pdf";
import project3PDF from "../../assets/pdf/Presentazione_BookFinder.pdf";
import project4PDF from "../../assets/pdf/Presentazione_TypeScript.pdf";
import project5PDF from "../../assets/pdf/Presentazione_EggPlant.pdf";
import project6PDF from "../../assets/pdf/Presentazione_Offset.pdf";

//import libraries
import Carousel from "../carousel/Carousel";
import CarouselProjects from "../carouselProjects/CarouselProjects";
import { motion } from "framer-motion";

function BodyHome({ className, children }) {
  const { images, setImages } = useContext(Context);
  const { slides, setSlides } = useContext(Context);
  const { openQuestions, setOpenQuestions } = useState(false);

  const arraySlides = [
    {
      src: htmlcssImage,
      alt: "html e css image project",
      link: "https://radattiluca.github.io./",
      repository: "https://github.com/radattiluca/radattiluca.github.io.git",
      pdf: project1PDF,
    },
    {
      src: jsBasic,
      alt: "js Basic image project",
      link: "https://tomatocounter.netlify.app/",
      repository: "https://github.com/radattiluca/PROGETTO-JS-BASIC.git",
      pdf: project2PDF,
    },
    {
      src: jsAdvanced,
      alt: "js Advanced image project",
      link: "https://bookfinderbycategory.netlify.app",
      repository: "https://github.com/radattiluca/project-book-finder.git",
      pdf: project3PDF,
    },
    {
      src: tsProject,
      alt: "type script image project",
      link: "https://codepen.io/Luca-Radatti/pen/vEBPmgM",
      repository: "https://github.com/radattiluca/Project-Type-Script.git",
      pdf: project4PDF,
    },
    {
      src: reactProject,
      alt: "react image project",
      link: "https://eggplant-veg-recipes.netlify.app/",
      repository:
        "https://github.com/radattiluca/recipe-veg-research-project.git",
      pdf: project5PDF,
    },
    {
      src: finalProject,
      alt: "final image project",
      link: "https://offset-footprint-calculator.netlify.app/",
      repository: "https://github.com/radattiluca/offset-final-project.git",
      pdf: project6PDF,
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

  // const { openInfo, setOpenInfo } = useContext(Context);

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <StyledNavbar></StyledNavbar>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <StyledContainerSectionSocial>
          <a href="https://github.com/radattiluca" target="_blank">
            <img src={gitHubLogo} alt="logo github" />
          </a>
          <a href="https://www.linkedin.com/in/radatti-luca/" target="_blank">
            <img src={linkedinLogo} alt="logo linkedin" />
          </a>
        </StyledContainerSectionSocial>
      </motion.div>
      <StyledSectionTopDesktop>
        <StyledContainerImage>
          <img src={imageHome} alt="picture keyboard with hands" />
        </StyledContainerImage>
        <StyledContainerText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>BENVENUTI!</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              Sono <span>LUCA</span>, sono un aspirante <span>FRONT END</span> e
              <span> UX/UI DESIGNER </span>
              amo esprimere la mia creatività attraverso il digitale.
            </p>
          </motion.div>
        </StyledContainerText>
      </StyledSectionTopDesktop>

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
