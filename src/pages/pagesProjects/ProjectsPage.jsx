// page about

import { useContext } from "react";

// import libreries
import { Link } from "react-router-dom";

// import styles
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer } from "../../components/app/App.style";
import { StyledNavbar } from "../../components/navbar/Navbar.style";
import {
  StyledPageProjects,
  StyledTriangleContainerProjects,
  StyledContainerProjects,
  StyledCardProject,
  StyledCardContainerLeft,
  StyledCardContainerRight,
  StyledCardContainerIcon,
} from "./ProjectsPage.style";

// import store
import { Context } from "../../store/Context";

//import image
import htmlcssImage from "../../assets/images/Html&Css.png";
import jsBasic from "../../assets/images/JsBasic.png";
import jsAdvanced from "../../assets/images/JsAdvanced.png";
import tsProject from "../../assets/images/TypeScript.png";
import reactProject from "../../assets/images/React.png";
import finalProject from "../../assets/images/Final.png";
import cssLog from "../../assets/images/cssLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import jsLogo from "../../assets/images/jsLogo.png";
import reactLogo from "../../assets/images/react.svg";
import sassLogo from "../../assets/images/sassIcon.png";
import tsLogo from "../../assets/images/ts-logo.png";

//import image
import iconHome from "../../assets/images/home.png";

function ProjectsPage({ className, children }) {
  const { extendNavbar } = useContext(Context);

  return (
    <StyledAppContainer>
      <div className={className}>
        <Link to={"/projects"}>{children}</Link>
      </div>
      <GlobalStyles />
      <StyledNavbar
        extendNavbar={extendNavbar ? "300px" : "80px"}
      ></StyledNavbar>

      <StyledPageProjects>
        <StyledTriangleContainerProjects>
          <Link to={"/"}>
            <img src={iconHome} alt="icon home" />
          </Link>
        </StyledTriangleContainerProjects>
        <StyledContainerProjects>
          <h3>I miei progetti</h3>

          <StyledCardProject>
            <StyledCardContainerLeft>
              <img src={htmlcssImage} alt="html e css project image" />
            </StyledCardContainerLeft>
            <StyledCardContainerRight>
              <h1>Portfolio personale</h1>
              <p>
                Primo progetto per il master in front end development con
                Start2Impact. Il sito su cui ti trovi ora lo sostituisce.
              </p>
            </StyledCardContainerRight>
            <StyledCardContainerIcon>
              <img src={htmlLogo} alt="htmlLogo" />
              <img src={cssLog} alt="cssLogo" />
            </StyledCardContainerIcon>
          </StyledCardProject>

          <StyledCardProject>
            <StyledCardContainerLeft>
              <img src={jsBasic} alt="js basic project image" />
            </StyledCardContainerLeft>
            <StyledCardContainerRight>
              <h1>Tomato Counter</h1>
              <p>Secondo progetto, creare un contatore.</p>
            </StyledCardContainerRight>
            <StyledCardContainerIcon>
              <img src={jsLogo} alt="htmlLogo" />
              <img src={htmlLogo} alt="htmlLogo" />
              <img src={sassLogo} alt="sassLogo" />
            </StyledCardContainerIcon>
          </StyledCardProject>

          <StyledCardProject>
            <StyledCardContainerLeft>
              <img src={jsAdvanced} alt="JS advanced project image" />
            </StyledCardContainerLeft>
            <StyledCardContainerRight>
              <h1>Book Finder</h1>
              <p>
                Terzo progetto, creare un sito per cercare libri ed incentivare
                alla lettura.
              </p>
            </StyledCardContainerRight>
            <StyledCardContainerIcon>
              <img src={jsLogo} alt="htmlLogo" />
              <img src={htmlLogo} alt="htmlLogo" />
              <img src={sassLogo} alt="sassLogo" />
            </StyledCardContainerIcon>
          </StyledCardProject>

          <StyledCardProject>
            <StyledCardContainerLeft>
              <img src={tsProject} alt="Type Script project image" />
            </StyledCardContainerLeft>
            <StyledCardContainerRight>
              <h1>Gestionale</h1>
              <p>
                Quarto progetto, creare un gestionale di un'azienda di
                beachwears ecosostenibile.
              </p>
            </StyledCardContainerRight>
            <StyledCardContainerIcon>
              <img src={tsLogo} alt="type script Logo" />
              <img src={htmlLogo} alt="htmlLogo" />
            </StyledCardContainerIcon>
          </StyledCardProject>

          <StyledCardProject>
            <StyledCardContainerLeft>
              <img src={reactProject} alt="react project image" />
            </StyledCardContainerLeft>
            <StyledCardContainerRight>
              <h1>EggPlant</h1>
              <p>
                Quinto progetto, creare un sito per cercare ricette vegetariane.
              </p>
            </StyledCardContainerRight>
            <StyledCardContainerIcon>
              <img src={jsLogo} alt="htmlLogo" />
              <img src={htmlLogo} alt="htmlLogo" />
              <img src={reactLogo} alt="reactLogo" />
              💅
            </StyledCardContainerIcon>
          </StyledCardProject>

          <StyledCardProject>
            <StyledCardContainerLeft>
              <img src={finalProject} alt="final project image" />
            </StyledCardContainerLeft>
            <StyledCardContainerRight>
              <h1>Offset</h1>
              <p>
                Progetto finale, creare una webapp per calcolare il footprint di
                un viaggio aereo.
              </p>
            </StyledCardContainerRight>
            <StyledCardContainerIcon>
              <img src={jsLogo} alt="htmlLogo" />
              <img src={htmlLogo} alt="htmlLogo" />
              <img src={reactLogo} alt="reactLogo" />
              💅
            </StyledCardContainerIcon>
          </StyledCardProject>
        </StyledContainerProjects>
      </StyledPageProjects>
    </StyledAppContainer>
  );
}

export default ProjectsPage;
