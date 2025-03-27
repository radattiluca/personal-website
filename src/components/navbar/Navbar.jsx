import { Link } from "react-router-dom";

//import styles
import {
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtends,
} from "./Navbar.style";

// import store
import { useContext } from "react";
import { Context } from "../../store/Context";

//import image
import iconMenu from "../../assets/images/iconMenu.png";
import iconXYellow from "../../assets/images/iconXYellow.png";

function Navbar({ className, children }) {
  const { extendNavbar, setExtendNavbar } = useContext(Context);

  //fare le funzioni direttamente nel onclick
  function handleClickExtendNavbar() {
    setExtendNavbar((curr) => !curr);
  }
  function closeExtendNavbar() {
    setExtendNavbar((curr) => !curr);
  }

  const partOfFront = "<Front>";
  const partOfName = "<Luca_Radatti>";
  const partOfEnd = "<End>";

  return (
    <div className={className}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link to={"/"}>
            <span> {partOfFront}</span>
            <p>{partOfName}</p>
            <span>{partOfEnd}</span>
          </Link>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to={"/"}>Home</NavbarLink>
            <NavbarLink to={"/contact"}>Contatti</NavbarLink>
            <NavbarLink to={"/info"}>Info</NavbarLink>
            <NavbarLink to={"/projects"}>Progetti</NavbarLink>
            <OpenLinksButton onClick={handleClickExtendNavbar}>
              {extendNavbar ? (
                <img src={iconXYellow} alt="munu icon" />
              ) : (
                <img src={iconMenu} alt="munu icon" />
              )}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtends to={"/"} onClick={closeExtendNavbar}>
            Home
          </NavbarLinkExtends>
          <NavbarLinkExtends to={"/contact"} onClick={closeExtendNavbar}>
            Contatti
          </NavbarLinkExtends>
          <NavbarLinkExtends to={"/info"} onClick={closeExtendNavbar}>
            Info
          </NavbarLinkExtends>
          <NavbarLinkExtends to={"/projects"} onClick={closeExtendNavbar}>
            Progetti
          </NavbarLinkExtends>
        </NavbarExtendedContainer>
      )}
    </div>
  );
}

export default Navbar;
