import styled from "styled-components";

//import components
import BodyHome from "./BodyHome.jsx";

export const StyledBodyHome = styled(BodyHome)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  justify-content: space-between;
`;
export const StyledContainerSectionSocial = styled.div`
  width: 100%;
  padding: 15px;

  & img {
    width: 40px;
    height: 40px;
    margin: 0 5px 0 5px;
  }
`;
export const StyledContainerImage = styled.div`
  width: 100%;

  & img {
    width: 100%;
  }
`;

export const StyledContainerSectionCarousel = styled.div`
  width: 100%;
  margin-top: 40px;

  & h3 {
    text-align: center;
    padding: 5px;
    font-size: 1.5em;
    color: #f8c954;
    font-weight: 800;
  }
`;

export const StyledContainerSectionProjects = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 20px 0 20px 0;
  background-color: rgb(248, 201, 84, 0.8);

  & h3 {
    text-align: center;
    padding: 5px;
    font-size: 1.5em;
    color: #004138;
    font-weight: 800;
  }

  & h4 {
    text-align: center;
    padding: 5px;
    color: #004138;
  }
`;

export const StyledContainerCarouselProjects = styled.div`
  width: 100%;
`;

export const StyledContainerSectionQuestions = styled.div`
  width: 100%;
  padding: 20px 0 20px 0;

  & h3 {
    text-align: center;
    padding: 5px;
    font-size: 1.5em;
    color: #f8c954;
    font-weight: 800;
  }
`;

export const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: #c0cbb6;

  & h2 {
    font-size: 3em;
    padding: 30px 0 30px 0px;
    color: #f8c954;
  }

  & p {
    width: 100%;
    padding: 15px;
    font-size: 1.5em;
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

export const StyledContainerQuestions = styled.div`
  width: 100%;
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
export const StyledContainerSectionContact = styled.div`
  width: 100%;
  background-color: rgb(248, 201, 84, 0.8);
  padding: 20px 0 60px 0;
  & h3 {
    text-align: center;
    padding: 5px;
    font-size: 1.5em;
    color: #004138;
    font-weight: 800;
  }
`;
export const StyledContainerContact = styled.div`
  width: 100%;
`;
