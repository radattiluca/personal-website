import styled from "styled-components";

//import components
import Footer from "./Footer.jsx";

export const StyledFooter = styled(Footer)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #004138;

  width: 100%;
  color: #f8c954;
  padding: 10px;
  z-index: 0;

  & a {
    text-decoration: none;
    color: #f8c954;
    cursor: pointer;
  }
  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    flex-direction: row;
    padding: 0 50px 0 50px;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    flex-direction: row;
    padding: 0 50px 0 50px;
  }
`;

export const LeftContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 25%;
  margin: auto;
  text-align: center;

  & p {
    margin-bottom: 10px;
  }

  & h3 {
    margin-bottom: 10px;
  }

  & a {
    font-weight: 700;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    text-align: left;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    text-align: left;
  }
`;

export const CenterContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex: 25%;
  margin: auto;
  justify-content: center;
  font-weight: 700;

  & img {
    width: 40px;
    height: 40px;
    margin: 0 5px 0 5px;
  }
`;

export const RightContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 25%;
  margin: auto;
  text-align: center;

  & img {
    width: 20px;
    height: 20px;
    vertical-align: bottom;
    margin-left: 5px;
  }

  & h4 {
    margin-bottom: 5px;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    text-align: left;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    text-align: left;
  }
`;

// export const MiniMenuContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: row;
//   flex: 25%;
//   margin: auto;
//   text-align: center;
//   cursor: pointer;
//   /* Large or high-resolution screens */
//   @media all and (min-width: 1690px) {
//     text-align: left;
//     flex-direction: column;

//     & span {
//       display: none;
//     }

//     & a {
//       margin-bottom: 10px;
//       font-size: 1.2em;
//     }
//   }

//   /* Desktop or Laptop screens */
//   @media all and (min-width: 1280px) and (max-width: 1689px) {
//     text-align: left;
//     flex-direction: column;
//     & span {
//       display: none;
//     }

//     & a {
//       margin-bottom: 10px;
//       font-size: 1.2em;
//     }
//   }
// `;
