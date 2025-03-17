// page for the contact

import { useContext } from "react";

// import libreries
import { Link } from "react-router-dom";

// import styles
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer } from "../../components/app/App.style";
import { StyledNavbar } from "../../components/navbar/Navbar.style";

import {
  SyledPageContact,
  StyledCircleContainerContact,
  StyledTriangleContainerContact,
} from "./ContactPage.style";
import { SyledForm } from "../../components/form/Form.style";

// import store
import { Context } from "../../store/Context";

function ContactPage({ className, children }) {
  const { extendNavbar } = useContext(Context);

  return (
    <StyledAppContainer>
      <div className={className}>
        <Link to={"/contact"}>{children}</Link>
      </div>
      <GlobalStyles />
      <StyledNavbar
        extendNavbar={extendNavbar ? "300px" : "80px"}
      ></StyledNavbar>
      <SyledPageContact>
        <StyledTriangleContainerContact></StyledTriangleContainerContact>
        <SyledForm></SyledForm>
        <StyledCircleContainerContact>
          <h3>
            Se non vuoi inviarmi un messaggio puoi contattarmi anche tramite:
            <a href="https://www.linkedin.com/in/radatti-luca/" target="_blank">
              <span>Linkedin 💬</span>
            </a>
          </h3>
        </StyledCircleContainerContact>
      </SyledPageContact>
    </StyledAppContainer>
  );
}

export default ContactPage;
