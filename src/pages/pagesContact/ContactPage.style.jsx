import styled from "styled-components";

import ContactPage from "./ContactPage.jsx";

import {
  CircleContainer,
  TriangleContainer,
} from "../../components/bodyHome/BodyHome.style.jsx";

export const SyledPageContact = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const StyledCircleContainerContact = styled.div`
  background: rgb(248, 201, 84);
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 5%,
    rgba(0, 65, 56, 1) 100%
  );
  width: 280px;
  height: 280px;
  border-radius: 360px;
  position: absolute;
  bottom: 0px;
  left: -75px;
  align-items: center;

  & h3 {
    font-size: 0.9em;
    text-align: left;
    color: #004138;
    width: 60%;
    margin: 30px 0 10px 90px;
    padding: 5px;
    font-weight: 600;
  }

  & a {
    margin-left: 5px;
    color: #c0cbb6;
    text-decoration: none;
  }

  & span {
    display: block;
  }
`;

export const StyledTriangleContainerContact = styled(TriangleContainer)`
  & img {
    width: 30px;
    height: 30px;
    position: relative;
    top: 14px;
    right: -10px;
  }
`;
