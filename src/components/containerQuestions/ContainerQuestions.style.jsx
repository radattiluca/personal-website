import styled from "styled-components";

//import components
import ContainerQuestions from "./ContainerQuestions";

export const StyledContainerQ = styled(ContainerQuestions)`
  width: 100%;
  height: 100vh;
`;

export const StyledContainerQuestions = styled.div`
  width: 100%;
  padding: 15px;

  & h4 {
    color: #c0cbb6;
    padding: 5px;
    margin-bottom: 20px;
    font-size: 1.2em;
    cursor: pointer;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    width: 80%;
    margin-left: 50px;
    font-size: 1.5em;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 80%;
    margin-left: 50px;
    font-size: 1.2em;
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    font-size: 1.1em;
  }
`;

export const StyledContainerAnswer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  & p {
    color: #c0cbb6;
    padding: 10px;
    line-height: 1.5em;
    font-size: 1.2em;

    & ul {
      margin-left: 20px;
      li {
        padding: 3px;
      }
    }
  }

  & a {
    text-decoration: none;
    color: #f1f3ef;
  }

  & img {
    width: 100%;
    height: 100%;
    margin: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      width: 60%;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      width: 60%;
    }

    /* Tablet in vertical mode and landscape mode */
    @media all and (min-width: 481px) and (max-width: 1279px) {
      width: 80%;
    }
  }
`;

export const StyledContainerX = styled.div`
  width: 100%;
  text-align: right;
  & img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
