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
    margin: 0px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export const TriangleExpanded = styled.div`
  background: rgb(248, 201, 84, 0.9);
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

  /* &:hover {
    width: 280px;
    height: 280px;
    bottom: 0px;
    left: -65px;

    & img {
      display: none;
    }
  } */
`;

// export const StyledWhoIs = styled.span`
// margin: 0 0 0 85px;
// font-family: "Single Day", cursive;
// color: #c0cbb6;
// text-decoration: underline;
// font-size: 1em;
// cursor: pointer;
// `;

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
  height: 95px;
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
    width: 30px;
    height: 30px;
    margin: 10px 0 0 7px;
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
