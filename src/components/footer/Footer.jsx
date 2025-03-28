//import styles
import {
  FooterInnerContainer,
  LeftContainer,
  CenterContainer,
  RightContainer,
  // MiniMenuContainer,
} from "./Footer.style";

//import images
import linkedinLogo from "../../assets/images/linkedinLogo.svg";
import gitHubLogo from "../../assets/images/gitHubLogo.svg";
import handshakeLogo from "../../assets/images/handshake.png";

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
          <p>
            Navigazione realizzata con
            <a
              href="https://https://www.npmjs.com/package/react-scroll-slick.neostack.com/"
              target="_blank"
            >
              <span> React Scroll</span>
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
          <span>Parliamone!</span>
          <img src={handshakeLogo} alt="logo letter" />
        </RightContainer>
      </FooterInnerContainer>
    </div>
  );
}

export default Footer;
