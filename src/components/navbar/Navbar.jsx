import { Link, Element } from "react-scroll";

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
          <span> {partOfFront}</span>
          <p>{partOfName}</p>
          <span>{partOfEnd}</span>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="form" smooth={true} duration={500}>
              Contattami
            </NavbarLink>
            <NavbarLink to="questions" smooth={true} duration={500}>
              Info
            </NavbarLink>
            <NavbarLink to="carouselWorks" smooth={true} duration={500}>
              Progetti
            </NavbarLink>
            <OpenLinksButton onClick={handleClickExtendNavbar}>
              {extendNavbar ? (
                <img
                  src={iconXYellow}
                  alt="munu icon"
                  style={{ width: "20px", height: "20px" }}
                />
              ) : (
                <img
                  src={iconMenu}
                  alt="munu icon"
                  style={{ width: "35px", height: "35px" }}
                />
              )}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtends
            // onClick={closeExtendNavbar}
            to="form"
            smooth={true}
            duration={500}
          >
            Contattami
          </NavbarLinkExtends>
          <NavbarLinkExtends
            to="questions"
            smooth={true}
            duration={500}
            // onClick={closeExtendNavbar}
          >
            Info
          </NavbarLinkExtends>
          <NavbarLinkExtends
            // onClick={closeExtendNavbar}
            to="carouselWorks"
            smooth={true}
            duration={500}
          >
            Progetti
          </NavbarLinkExtends>
        </NavbarExtendedContainer>
      )}
    </div>
  );
}

export default Navbar;
