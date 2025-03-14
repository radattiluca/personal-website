import styled from "styled-components";

//import components
import BodyHome from "./BodyHome.jsx";

export const StyledBodyHome = styled(BodyHome)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  justify-content: space-between;
`;

export const TriangleContainer = styled.div`
  background: #f8c954;
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
  rotate: 120deg;

  & img {
    width: 40px;
    height: 40px;
    rotate: 240deg;
    margin: 8px;
  }
`;

export const CircleContainer = styled.div`
  background: rgb(248, 201, 84);
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 5%,
    rgba(0, 65, 56, 1) 100%
  );
  width: 280px;
  height: 280px;
  position: absolute;
  border-radius: 460px;
  bottom: 0px;
  left: -75px;
  display: flex;
  flex-direction: column;

  & h3 {
    color: #004138;
    margin: 50px 0 10px 70px;
    padding: 5px 40px 5px 10px;
    font-size: 0.9em;
    font-weight: 800;
    text-align: center;
  }
`;

export const StyledWhoIs = styled.span`
  margin: 0 0 0 85px;
  font-family: "Single Day", cursive;
  color: #c0cbb6;
  text-decoration: underline;
  font-size: 1em;
  cursor: pointer;
`;

export const StyledContactContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 200px;
  background: #f8c954;
  background: linear-gradient(
    90deg,
    rgba(248, 201, 84, 1) 0%,
    rgba(0, 65, 56, 1) 100%
  );
  position: absolute;
  right: -30px;
  bottom: 50px;
  display: flex;
  justify-content: center;

  & img {
    width: 40px;
    height: 40px;
    margin: 13px 20px 0 0;
  }
`;

export const StyledLogoContainer = styled.div`
  width: 100px;
  height: 120px;
  display: flex;
  flex-direction: column;
  background: rgb(248, 201, 84);
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 44%,
    rgba(0, 65, 56, 1) 100%
  );
  position: absolute;
  top: 200px;
  right: -58px;
  border-radius: 10px;
  justify-content: center;

  & img {
    width: 35px;
    height: 35px;
    margin: 10px 0 0 5px;
  }
`;

export const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: #c0cbb6;

  & h2 {
    margin: 10vh auto 0 auto;
    padding: 30px 30px 10px 30px;
    color: #f8c954;
  }

  & p {
    width: 80%;
    margin: 0 auto 0 auto;
    padding: 30px 30px 30px 20px;
    font-size: 1.1em;
  }

  & span {
    font-family: "Single Day", cursive;
    font-size: 1.5em;
    color: #f8c954;
  }
`;

export const StyledContainerSkills = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  padding: 30px 0 0 10px;
  align-items: center;

  & img {
    width: 40px;
    height: 40px;
  }

  & span {
    margin: 0 5px 0 5px;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
  }
`;
