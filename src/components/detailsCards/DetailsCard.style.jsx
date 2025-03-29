import styled from "styled-components";

//import components
import DetailsCards from "./DetailsCards";

export const StyledDetailsCards = styled(DetailsCards)`
  width: 100%;
  margin: auto;
`;

export const StyledContainerDetailsCards = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(192, 203, 182, 0.4);
  margin: auto;
  padding: 49px 10px 49px 10px;
  width: 80%;
  justify-content: space-around;
  border-radius: 7px;

  & img {
    width: 30px;
    height: 30px;
  }
`;

export const StyledContainerPDF = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
`;

export const StyledContainerSiteWeb = styled.div`
  display: flex;
  flex-direction: column;
  color: orange;
`;

export const StyledContainerRepository = styled.div`
  display: flex;
  flex-direction: column;
  color: blue;
`;
