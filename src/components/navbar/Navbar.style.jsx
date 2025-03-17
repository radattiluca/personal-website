import styled from "styled-components";
import { Link } from "react-router-dom";

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

  @media (max-width: 767px) {
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

  & img {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 1279px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (min-width: 1279px) {
    display: none;
  }
`;

export const NavbarLinkExtends = styled(Link)`
  display: flex;
  color: #c0cbb6;
  text-decoration: none;
  font-size: x-large;
  margin: 10px;

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
  color: #f8c954;

  & p {
    padding-left: 10px;
  }

  & span {
    color: #c0cbb6;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
`;
