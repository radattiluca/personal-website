//import styles
import {
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  // NavbarExtendedContainer,
  NavbarLinkContainer,
  // NavbarLink,
  OpenLinksButton,
  // NavbarLinkExtends,
} from "./Navbar.style";

function Navbar({ className, children }) {
  const partOfFront = "<Front>";
  const partOfName = "<Luca_Radatti>";
  const partOfEnd = "<End>";

  return (
    <div className={className}>
      <NavbarInnerContainer>
        <LeftContainer>
          <span> {partOfFront}</span>
          <p>{partOfName}</p>
          <span>{partOfEnd}</span>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <OpenLinksButton>☰</OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {/* <NavbarExtendedContainer></NavbarExtendedContainer> */}
    </div>
  );
}

export default Navbar;
