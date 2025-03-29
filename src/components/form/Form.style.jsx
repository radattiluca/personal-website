import styled from "styled-components";

import Contact from "./Form.jsx";

export const StyledForm = styled(Contact)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledFormContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 9px;

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    width: 20%;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 30%;
  }

  /* Tablet in vertical mode and landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    width: 40%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 30px;
  margin: 20px 0 8px 0;
  padding-bottom: 10px;
  background: transparent;
  border-bottom: 1px solid #c0cbb6;
  font-size: 1.5em;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border-bottom: 1px solid #c0cbb6;
    -webkit-text-fill-color: #c0cbb6;
    -webkit-box-shadow: 0 0 0px 1000px trasparent inset;
  }

  &::placeholder {
    color: #c0cbb6;
  }

  &[type="text"],
  &[type="email"] {
    color: #004138;
  }

  &[type="text"]:focus,
  &[type="email"]:focus {
    outline: none;
    border-bottom: 1px solid #f8c954;
    font-weight: 700;

    &::placeholder {
      color: #004138;
    }
  }
`;

export const StyledInputSubmit = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  font-size: 1.7em;
  background-color: #004138;
  font-family: "JetBrains Mono", monospace;
  cursor: pointer;
  color: #f8c954;
  font-weight: 600;
`;

export const StyledLabel = styled.label`
  color: #c0cbb6;
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c0cbb6;
  display: flex;
  margin: 20px 0 8px 0;
  overflow: scroll;
  background: transparent;
  color: #004138;
  font-size: 1.7em;

  &::placeholder {
    color: #c0cbb6;
    font-size: 1.1em;
  }

  &:focus {
    outline: none;
    padding: 4px;
    height: 80px;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #c0cbb6;
    font-weight: 700;
    border-bottom: none;

    &::placeholder {
      color: #004138;
    }
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledTitleForm = styled.h4`
  display: flex;
  text-align: center;
  margin-bottom: 30px;
  color: #004138;
  font-size: 1.3em;
`;
