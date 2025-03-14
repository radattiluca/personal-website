import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer } from "./App.style";
import { StyledNavbar } from "../navbar/Navbar.style";
import { StyledBodyHome } from "../bodyHome/BodyHome.style";

function App() {
  return (
    <StyledAppContainer>
      <GlobalStyles />
      <StyledNavbar></StyledNavbar>
      <StyledBodyHome></StyledBodyHome>
    </StyledAppContainer>
  );
}

export default App;
