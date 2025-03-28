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
  /* background: linear-gradient(
    90deg,
    rgba(248, 201, 84, 1) 0%,
    rgba(0, 65, 56, 1) 100%
  ); */
  width: 180px;
  height: 160px;
  /* position: absolute;
  top: 10px;
  left: -140px; */
  /* rotate: 120deg; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  & img {
    width: 40px;
    height: 40px;
    /* rotate: 240deg; */
    margin: 0px;
    cursor: pointer;
    /* position: absolute;
    top: 10px;
    left: 10px; */
  }
`;

export const TriangleExpanded = styled.div`
  /* background: rgb(248, 201, 84, 0.9); */
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 20px;
  left: 0px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 3;

  & button {
    border: none;
    background: transparent;
    color: #c0cbb6;
    cursor: pointer;
    padding: 5px;

    & img {
      width: 15px;
      height: 15px;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0px;
    right: 0px;
    list-style: none;
    overflow: scroll;
    width: 100%;
    height: 100%;
    align-items: center;

    & li {
      padding: 0 5px 0 0;
      margin-top: 10px;
      & img {
        width: 100%;
        height: auto;
        & :hover {
          cursor: pointer;
          scale: 1.3;
        }
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CircleContainer = styled.div`
  width: 117px;
  height: 57px;
  display: flex;
  background: trasparent;
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 44%,
    rgba(0, 65, 56, 1) 100%
  );
  /* position: absolute;
  bottom: 131px;
  left: 40px; */
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

export const StyledContactContainer = styled.div`
  width: 117px;
  height: 57px;
  display: flex;
  background: trasparent;
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 44%,
    rgba(0, 65, 56, 1) 100%
  );
  /* position: absolute;
  bottom: 131px;
  right: 40px; */
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

export const StyledLogoContainer = styled.div`
  width: 100px;
  display: flex;
  background: trasparent;
  background: linear-gradient(
    223deg,
    rgba(248, 201, 84, 1) 44%,
    rgba(0, 65, 56, 1) 100%
  );
  position: absolute;
  top: 39px;
  right: -9px;
  border-radius: 10px;
  justify-content: center;

  & img {
    width: 30px;
    height: 30px;
  }
`;

export const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: #c0cbb6;

  & h2 {
    margin: 18vh auto 0 auto;
    padding: 30px 30px 0 30px;
    color: #f8c954;
  }

  & p {
    width: 80%;
    margin: 0 auto 10px auto;
    padding: 30px;
    font-size: 1.1em;
  }

  & span {
    font-family: "Single Day", cursive;
    font-size: 1.5em;
    color: #f8c954;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    font-size: 1.5em;
    & p {
      width: 60%;
    }
    & h2 {
      margin: 15vh auto 0 auto;
    }
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    font-size: 1.2em;
    & p {
      width: 60%;
    }
    & h2 {
      margin: 15vh auto 0 auto;
    }
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    font-size: 1.2em;
    & h2 {
      margin: 15vh auto 0 auto;
    }
  }
`;

export const StyledContainerSkills = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  padding: 30px 0 0 10px;
  justify-content: center;
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
    justify-content: start;
  }
`;

export const StyledContainerInfo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c0cbb6;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  padding: 20px;
  margin-bottom: 30px;
  overflow: scroll;
`;

export const StyledButtonCloseInfo = styled.button`
  border: none;
  background: transparent;
  margin-left: auto;
  cursor: pointer;
  color: #004138;
  font-weight: 600;
  display: flex;
  position: sticky;
  top: 0;

  & img {
    width: 20px;
    height: 20px;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    font-size: 1.2em;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    font-size: 1.2em;
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
  }
`;

export const StyledContainerCallToAction = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
