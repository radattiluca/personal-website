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
    width: 55px;
    height: 55px;
    rotate: 240deg;
    margin: 0px;
    cursor: pointer;
  }
`;

export const TriangleExpanded = styled.div`
  background: #f8c954;
  background: linear-gradient(
    90deg,
    rgba(248, 201, 84, 1) 0%,
    rgba(0, 65, 56, 1) 100%
  );
  width: 100%;
  position: absolute;
  top: 20px;
  left: 0px;
  display: flex;
  flex-direction: column;
  padding: 10px;

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
      & img {
        width: 100px;
        height: auto;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CircleContainer = styled.div`
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

  & h3 {
    color: #004138;
    width: 60%;
    margin: 60px 0 10px 80px;
    padding: 5px;
    font-size: 1em;
    font-weight: 600;
    text-align: left;
  }

  & img {
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 100px;
    top: 0px;
    left: 30px;
    padding: 5px;
  }

  &:hover {
    width: 280px;
    height: 280px;
    bottom: 0px;
    left: -65px;

    & img {
      display: none;
    }
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
    cursor: pointer;
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
  justify-content: center;

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

  & p {
    margin: 0 auto 0 auto;
    color: #052f29;
    line-height: 1.5em;
    padding: 20px 0 20px 0;
  }

  & span {
    display: block;
  }
`;

export const StyledButtonCloseInfo = styled.button`
  border: none;
  background: transparent;
  margin-left: auto;
  cursor: pointer;
  font-family: "Single Day", cursive;

  & img {
    width: 20px;
    height: 20px;
  }
`;
