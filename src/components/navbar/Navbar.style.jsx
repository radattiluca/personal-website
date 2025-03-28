import styled from "styled-components";
import { Link, Element } from "react-scroll";

//import components
import Navbar from "./Navbar.jsx";

export const StyledNavbar = styled(Navbar)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 10px 20px;

  @media (min-width: 1279px) {
    padding: 20px 50px 10px 50px;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: #c0cbb6;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;
  width: max-content;
  cursor: pointer;

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 43px;
  background: none;
  border-radius: 5px;
  border: none;
  color: #f8c954;
  font-size: 35px;
  cursor: pointer;
  padding-bottom: 44px;

  /* & img {
    width: 35px;
    height: 35px;
  } */

  @media (min-width: 1279px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* padding: 30px 0 0 0; */

  @media (min-width: 1279px) {
    display: none;
  }
`;

export const NavbarLinkExtends = styled(Link)`
  display: flex;
  text-align: center;
  color: #c0cbb6;
  text-decoration: none;
  font-size: 1em;
  margin: 10px;
  border-bottom: #c0cbb6 solid 1px;

  @media (min-width: 1279px) {
    display: none;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-family: "JetBrains Mono", monospace;

  & p {
    font-size: 1.3em;
    padding-left: 10px;
    color: #f8c954;
  }

  & span {
    font-size: 1.3em;
    color: #c0cbb6;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  align-items: center;
`;
