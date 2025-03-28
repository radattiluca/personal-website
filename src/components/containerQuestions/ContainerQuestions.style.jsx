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

  & img {
    width: 25px;
    height: 25px;
    margin: auto;
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
    color: #5d9890;
    font-weight: 700;
  }
`;

export const StyledContainerX = styled.div`
  width: 100%;
  text-align: center;
`;
