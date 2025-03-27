import { Link } from "react-router-dom";

//import styles
import {
  FooterInnerContainer,
  LeftContainer,
  CenterContainer,
  RightContainer,
  MiniMenuContainer,
} from "./Footer.style";

//import images
import linkedinLogo from "../../assets/images/linkedin.png";
import gitHubLogo from "../../assets/images/github.png";
import logoLetter from "../../assets/images/logoLetterFooter.png";

// // import store
// import { useContext } from "react";
// import { Context } from "../../store/Context";

// //import image
// import iconMenu from "../../assets/images/iconMenu.png";
// import iconXYellow from "../../assets/images/iconXYellow.png";

function Footer({ className, children }) {
  return (
    <div className={className}>
      <FooterInnerContainer>
        <MiniMenuContainer>
          <Link to={"/"}>Home</Link>
          <span>|</span>
          <Link to={"/contact"}>Contatti</Link>
          <span>|</span>
          <Link to={"/info"}>Info</Link>
          <span>|</span>
          <Link to={"/projects"}>Progetti</Link>
        </MiniMenuContainer>
        <LeftContainer>
          <h3>Copyright e Credits</h3>
          <p>
            &copy; 2025 Luca Radatti - Junior Front-End Developer & UX/UI
            Enthusiast
          </p>
          <p>
            Immagini gratuite da
            <a href="https://www.freepik.com" target="_blank">
              <span> Freepik</span>
            </a>
          </p>
          <p>
            Carousel realizzato con
            <a href="https://react-slick.neostack.com/" target="_blank">
              <span> React Slick</span>
            </a>
          </p>
        </LeftContainer>
        <CenterContainer>
          <a href="https://github.com/radattiluca" target="_blank">
            <img src={gitHubLogo} alt="logo github" />
          </a>
          <a href="https://www.linkedin.com/in/radatti-luca/" target="_blank">
            <img src={linkedinLogo} alt="logo linkedin" />
          </a>
        </CenterContainer>
        <RightContainer>
          <h4>Hai un progetto interessante?</h4>
          <Link to={"/contact"}>
            Parliamone!
            <img src={logoLetter} alt="logo letter" />
          </Link>
        </RightContainer>
      </FooterInnerContainer>
    </div>
  );
}

export default Footer;
