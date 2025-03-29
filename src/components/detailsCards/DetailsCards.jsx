//import styles
import {
  StyledDetailsCards,
  StyledContainerDetailsCards,
  StyledContainerPDF,
  StyledContainerSiteWeb,
  StyledContainerRepository,
} from "./DetailsCard.style";

//import image
import pdf from "../../assets/images/iconPdf.png";
import repository from "../../assets/images/repository.svg";
import web from "../../assets/images/iconSite.png";

function DetailsCards({ className, children }) {
  return (
    <div className={className}>
      <StyledContainerDetailsCards>
        <StyledContainerPDF>
          <img src={pdf} alt="" />
        </StyledContainerPDF>
        <StyledContainerSiteWeb>
          <img src={web} alt="" />
        </StyledContainerSiteWeb>
        <StyledContainerRepository>
          <img src={repository} alt="" />
        </StyledContainerRepository>
      </StyledContainerDetailsCards>
    </div>
  );
}

export default DetailsCards;
