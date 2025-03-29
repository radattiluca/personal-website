//import styles
import { StyledCv, StyledCvContainer, StyledCloseCv } from "./Cv.style";

//import images
import file1 from "../../assets/images/Curriculum Front End.png";
import file2 from "../../assets/images/Curriculum Front End (2).png";

function Cv({ className, children }) {
  return (
    <div className={className}>
      <StyledCvContainer>
        <img src={file1} alt="photo curriculum" />
        <img src={file2} alt="photo curriculum" />
        <StyledCloseCv>Chiudi</StyledCloseCv>
      </StyledCvContainer>
      ;
    </div>
  );
}

export default Cv;
