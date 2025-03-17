//import styles
import { StyledCv, StyledCvContainer, StyledCloseCv } from "./Cv.style";

//import images
import file1 from "../../assets/images/Curriculum Front End.png";
import file2 from "../../assets/images/Curriculum Front End (2).png";

// import store
import { Context } from "../../store/Context";
import { useContext } from "react";

function Cv({ className, children }) {
  const { openCV, setOpenCV } = useContext(Context);
  return (
    <div className={className}>
      <StyledCvContainer>
        <img src={file1} alt="photo curriculum" />
        <img src={file2} alt="photo curriculum" />
        <StyledCloseCv onClick={() => setOpenCV((curr) => !curr)}>
          Chiudi
        </StyledCloseCv>
      </StyledCvContainer>
      ;
    </div>
  );
}

export default Cv;
