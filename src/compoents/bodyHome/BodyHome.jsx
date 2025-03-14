//import styles
import {
  StyledBodyHome,
  TriangleContainer,
  CircleContainer,
  StyledWhoIs,
  StyledContactContainer,
  StyledLogoContainer,
  StyledContainerText,
  StyledContainerSkills,
} from "./BodyHome.style";

//import images
import emailLogo from "../../assets/images/email.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import gitHubLogo from "../../assets/images/github.png";
import cssLog from "../../assets/images/cssLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import jsLogo from "../../assets/images/jsLogo.png";
import logoPortfolio from "../../assets/images/portfolio.png";

function BodyHome({ className, children }) {
  return (
    <div className={className}>
      <TriangleContainer>
        <img src={logoPortfolio} alt="logo portfolio" />
      </TriangleContainer>
      <StyledLogoContainer>
        <img src={gitHubLogo} alt="logo github" />
        <img src={linkedinLogo} alt="logo linkedin" />
      </StyledLogoContainer>
      <StyledContainerText>
        <h2>Benvenuto nel mio sito web!</h2>
        <p>
          Sono <span>LUCA</span>, sono uno sviluppatore <span>FRONT END</span> e
          amo esprimere la mia creatività attraverso il digitale.
        </p>
        <StyledContainerSkills>
          <img src={htmlLogo} alt="logo html" /> <span>80%</span>
          <img src={cssLog} alt="logo css" /> <span>60%</span>
          <img src={jsLogo} alt="logo js" /> <span>40%</span>
        </StyledContainerSkills>
      </StyledContainerText>

      <CircleContainer>
        <h3>Che cos’è uno sviluppatore Front End?</h3>
        <StyledWhoIs>CLICCA QUI PER SCOPRIRLO</StyledWhoIs>
      </CircleContainer>
      <StyledContactContainer>
        <img src={emailLogo} alt="email logo" />
      </StyledContactContainer>
    </div>
  );
}

export default BodyHome;
