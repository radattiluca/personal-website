import styled from "styled-components";

import ProjectsPage from "./ProjectsPage.jsx";

import {
  CircleContainer,
  TriangleContainer,
} from "../../components/bodyHome/BodyHome.style.jsx";

export const StyledPageProjects = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; //cambiato da vh perchè il footer saliva sopra
  position: relative;
  margin-bottom: 50px;
`;

export const StyledTriangleContainerProjects = styled(TriangleContainer)`
  & img {
    width: 30px;
    height: 30px;
    position: relative;
    top: 14px;
    right: -10px;
  }
`;

export const StyledContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  width: 100%;
  height: 100%;
  align-items: center;

  & h3 {
    color: #f8c954;
  }
`;

export const StyledCardProject = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 20px;
`;

export const StyledCardContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 40%;
  justify-content: center;

  & img {
    width: 100%;
  }
`;
export const StyledCardContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  justify-content: center;

  & h1 {
    font-size: 0.5em;
    padding: 0 10px 0 10px;
    color: #f8c954;
  }

  & p {
    font-size: 0.5em;
    padding: 5px 5px 5px 10px;
    color: #c0cbb6;
  }
`;

export const StyledCardContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10%;
  justify-content: center;
  font-size: 8px;

  & img {
    width: 10px;
    margin-bottom: 3px;
  }
`;
