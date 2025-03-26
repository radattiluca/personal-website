import styled from "styled-components";

import InfoPage from "./InfoPage.jsx";

import {
  CircleContainer,
  TriangleContainer,
} from "../../components/bodyHome/BodyHome.style.jsx";

export const StyledPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;

  & h3 {
    text-align: center;
    padding: 0 0 10px 0;
    position: sticky;
    top: 0;
    color: #f8c954;
    background-color: #004138;
  }
`;

export const StyledContainerInfoAboutMe = styled.div`
  width: 90%;
  height: 58%;
  margin: auto;
  overflow: scroll;
  margin-top: 20vh;

  &::-webkit-scrollbar {
    display: none;
  }

  & p {
    padding: 5px 4px 5px 0;
    margin-bottom: 20px;
    text-align: center;
    color: #c0cbb6;
    line-height: 1.5em;
  }
  & ul {
    margin: 20px 0 0 0;
    li {
      text-align: left;
      padding: 5px 0 5px 5px;

      & span {
        color: #f8c954;
      }
    }
  }
`;

export const StyledCircleContainerInfo = styled.div`
  background: rgb(248, 201, 84);
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 5%,
    rgba(0, 65, 56, 1) 100%
  );
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 200px;
  bottom: 50px;
  left: -30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & img {
    width: 35px;
    height: 35px;
    position: relative;
    top: 15px;
    left: 38px;
  }
`;

export const StyledTriangleContainerInfo = styled(TriangleContainer)`
  /* background: #f8c954;
  background: linear-gradient(
    90deg,
    rgba(248, 201, 84, 1) 0%,
    rgba(0, 65, 56, 1) 100%
  );
  width: 180px;
  height: 160px;
  position: absolute;
  top: 10px;
  left: -140px;
  rotate: 120deg; */

  & img {
    width: 30px;
    height: 30px;
    position: relative;
    top: 14px;
    right: -10px;
  }
`;
