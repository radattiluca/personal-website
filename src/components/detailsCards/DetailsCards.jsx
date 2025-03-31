import { useContext } from "react";
import { Context } from "../../store/Context";

//import styles
import {
  StyledDetailsCards,
  StyledContainerDetailsCards,
  StyledContainerPDF,
  StyledContainerSiteWeb,
  StyledContainerRepository,
  StyledContainerClose,
} from "./DetailsCard.style";

//import image
import pdfIcon from "../../assets/images/iconPdf.png";
import repositoryImage from "../../assets/images/repository.png";
import web from "../../assets/images/iconSite.png";
import closeXDark from "../../assets/images/iconX.png";

function DetailsCards({ className, children, repository, link, pdf }) {
  const { setOpenLinksProject } = useContext(Context);
  const { dotsShow, setDotsShow } = useContext(Context);
  return (
    <div className={className}>
      <StyledContainerDetailsCards>
        <StyledContainerPDF>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <img src={pdfIcon} alt="file pdf icon" />
          </a>
        </StyledContainerPDF>
        <StyledContainerSiteWeb>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={web} alt="web icon" />
          </a>
        </StyledContainerSiteWeb>
        <StyledContainerRepository>
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <img src={repositoryImage} alt="Logo GitHub Icon" />
          </a>
        </StyledContainerRepository>
        <StyledContainerClose>
          <img
            src={closeXDark}
            alt="x close"
            onClick={() => {
              setOpenLinksProject((curr) => !curr);
              setDotsShow((curr) => !curr);
            }}
          />
        </StyledContainerClose>
      </StyledContainerDetailsCards>
    </div>
  );
}

export default DetailsCards;
