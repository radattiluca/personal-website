import { Link } from "react-router-dom";

//import store
import { Context } from "../../store/Context";
import { useContext, useEffect } from "react";

//import styles
import {
  StyledBodyHome,
  TriangleContainer,
  CircleContainer,
  StyledWhoIs,
  StyledContactContainer,
  StyledLogoContainer,
  StyledContainerText,
  StyledContainerInfo,
  StyledButtonCloseInfo,
  TriangleExpanded,
} from "./BodyHome.style";
import { StyledContainerCarousel } from "../carousel/Carousel.style";

//import images
import emailLogo from "../../assets/images/email.gif";
import linkedinLogo from "../../assets/images/linkedin.png";
import gitHubLogo from "../../assets/images/github.png";
import cssLog from "../../assets/images/cssLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import jsLogo from "../../assets/images/jsLogo.png";
import logoPortfolio from "../../assets/images/portfolio.gif";
import questions from "../../assets/images/questions.png";
import iconX from "../../assets/images/iconX.png";
import htmlcssImage from "../../assets/images/Html&Css.png";
import jsBasic from "../../assets/images/JsBasic.png";
import jsAdvanced from "../../assets/images/JsAdvanced.png";
import tsProject from "../../assets/images/TypeScript.png";
import reactProject from "../../assets/images/React.png";
import finalProject from "../../assets/images/Final.png";

import Carousel from "../carousel/Carousel";

function BodyHome({ className, children }) {
  const { images, setImages } = useContext(Context);

  const arrayImages = [
    { src: "../../assets/images/ts-logo.png", alt: "TypeScript" },
    { src: "../../assets/images/cssLogo.png", alt: "CSS" },
    { src: "../../assets/images/htmlLogo.png", alt: "HTML" },
    { src: "../../assets/images/jsLogo.png", alt: "JavaScript" },
    { src: "../../assets/images/react.svg", alt: "React" },
    { src: "../../assets/images/sassIcon.png", alt: "SASS" },
    { src: "../../assets/images/Git-Icon.png", alt: "Git" },
  ];

  useEffect(() => {
    setImages(arrayImages);
    console.log(images);
  }, []);

  useEffect(() => {
    console.log(images);
  }, [images]);

  const { openInfo, setOpenInfo } = useContext(Context);
  const { expandedTriangle, setExpandedTriangle } = useContext(Context);

  return (
    <div className={className}>
      {expandedTriangle ? (
        <TriangleExpanded>
          <button onClick={() => setExpandedTriangle((curr) => !curr)}>
            <img src={iconX} alt="iconX" />
          </button>
          <Link to={"/projects"}>
            <ul>
              <li>
                <img src={htmlcssImage} alt="" />
              </li>

              <li>
                <img src={jsBasic} alt="" />
              </li>
              <li>
                <img src={jsAdvanced} alt="" />
              </li>
              <li>
                <img src={tsProject} alt="" />
              </li>
              <li>
                <img src={reactProject} alt="" />
              </li>
              <li>
                <img src={finalProject} alt="" />
              </li>
            </ul>
          </Link>
        </TriangleExpanded>
      ) : (
        <TriangleContainer>
          {/* <Link to={"/projects"}> */}
          <img
            src={logoPortfolio}
            alt="logo portfolio"
            onClick={() => setExpandedTriangle((curr) => !curr)}
          />
          {/* </Link> */}
        </TriangleContainer>
      )}

      <StyledLogoContainer>
        <a href="https://github.com/radattiluca" target="_blank">
          <img src={gitHubLogo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/radatti-luca/" target="_blank">
          <img src={linkedinLogo} alt="logo linkedin" />
        </a>
      </StyledLogoContainer>
      <StyledContainerText>
        <h2>Benvenuto nel mio sito web!</h2>
        <p>
          Sono <span>LUCA</span>, sono uno sviluppatore <span>FRONT END</span> e
          amo esprimere la mia creatività attraverso il digitale.
        </p>

        <StyledContainerCarousel>
          <Carousel
            images={images}
            slidesToShow={4}
            autoplay={true}
            speed={3000}
          />
        </StyledContainerCarousel>
      </StyledContainerText>

      {openInfo && (
        <StyledContainerInfo>
          <StyledButtonCloseInfo onClick={() => setOpenInfo((curr) => !curr)}>
            <img src={iconX} alt="icon X" />
          </StyledButtonCloseInfo>
          <p>
            Il Front End Developer è la persona che crea la parte visibile di un
            sito web o di un'app. In pratica, è quello che si occupa di tutto
            ciò con cui gli utenti interagiscono: pulsanti, testi, immagini,
            animazioni e il modo in cui si muovono tra le pagine.
          </p>
          <p>
            <span>Immagina un sito web come un ristorante:</span>Il Front End
            Developer è lo chef che prepara i piatti in modo che siano belli da
            vedere e facili da mangiare. Il Back End Developer è chi gestisce la
            cucina dietro le quinte, facendo in modo che gli ingredienti
            arrivino nel piatto nel modo giusto.
          </p>
          <p>
            Per creare un sito o un’app, il Front End Developer usa linguaggi
            come HTML, CSS e JavaScript, che servono a costruire la struttura,
            lo stile e le funzionalità interattive.
          </p>
          <p>
            Se un sito è ben fatto, facile da usare e piacevole alla vista, è
            merito suo!
          </p>
          <StyledButtonCloseInfo onClick={() => setOpenInfo((curr) => !curr)}>
            Chiudi
          </StyledButtonCloseInfo>
        </StyledContainerInfo>
      )}

      <CircleContainer>
        <img src={questions} alt="question marks" />
        <h3>Vuoi sapare cos'è un Front End Developer?</h3>
        <StyledWhoIs onClick={() => setOpenInfo((curr) => !curr)}>
          CLICCA QUI PER SCOPRIRLO
        </StyledWhoIs>
      </CircleContainer>
      <StyledContactContainer>
        <Link to={"/contact"}>
          <img src={emailLogo} alt="email logo" />
        </Link>
      </StyledContactContainer>
    </div>
  );
}

export default BodyHome;
