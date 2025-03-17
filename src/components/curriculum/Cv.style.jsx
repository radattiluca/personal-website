import styled from "styled-components";

//import components
import Cv from "./Cv.jsx";

export const StyledCv = styled(Cv)`
  width: 100%;
  height: 100vh;
`;

export const StyledCvContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #004138;

  & img {
    width: 90%;
    margin: 30px 0 20px 0;
  }
`;

export const StyledCloseCv = styled.button`
  border: none;
  background: transparent;
  color: #c0cbb6;
  padding: 30px;
`;
