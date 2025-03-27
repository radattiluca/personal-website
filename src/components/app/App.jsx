import { useContext } from "react";

//import store
import { Context } from "../../store/Context";

import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer } from "./App.style";
import { StyledNavbar } from "../navbar/Navbar.style";
import { StyledBodyHome } from "../bodyHome/BodyHome.style";
import { StyledFooter } from "../footer/Footer.style";

function App() {
  const { extendNavbar } = useContext(Context);

  return (
    <StyledAppContainer>
      <GlobalStyles />
      <StyledNavbar
        extendNavbar={extendNavbar ? "300px" : "80px"}
      ></StyledNavbar>
      <StyledBodyHome></StyledBodyHome>
      <StyledFooter></StyledFooter>
    </StyledAppContainer>
  );
}

export default App;
