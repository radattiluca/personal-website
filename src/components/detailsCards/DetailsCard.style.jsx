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
  margin: 5px auto 0 auto;
  width: 80%;
  justify-content: space-around;
  position: relative;
  top: -35px;

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    width: 40%;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 50%;
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    width: 70%;
  }

  & img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0003);

    &:hover {
      transform: scale(1.2);
    }
    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      width: 80px;
      height: 80px;
    }
    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      width: 60px;
      height: 60px;
    }
    /* Tablet in vertical mode and landscape mode */
    @media all and (min-width: 481px) and (max-width: 1279px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const StyledContainerPDF = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainerSiteWeb = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainerRepository = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainerClose = styled.div`
  display: flex;
  position: absolute;
  top: 56px;
  border-radius: 20px;
  padding: 5px;

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    right: 25px;
    top: -24px;
    background-color: #f8c954;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    right: 25px;
    top: -24px;
    background-color: #f8c954;
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    right: 14px;
    top: -24px;
    background-color: #f8c954;
  }

  & img {
    width: 20px;
    height: 20px;
    margin: 0;
    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent);
  }
`;
