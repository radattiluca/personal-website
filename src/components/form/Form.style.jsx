import styled from "styled-components";

import Contact from "./Form.jsx";

export const SyledForm = styled(Contact)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledFormContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 30px;
  margin: 8px 0 8px 0;
  background: transparent;
  border-bottom: 1px solid #c0cbb6;
  font-size: 1em;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border-bottom: 1px solid #c0cbb6;
    -webkit-text-fill-color: #c0cbb6;
    -webkit-box-shadow: 0 0 0px 1000px #004138 inset;
  }

  &::placeholder {
    color: #c0cbb6;
  }

  &[type="text"],
  &[type="email"] {
    color: #c0cbb6;
  }

  &[type="text"]:focus,
  &[type="email"]:focus {
    outline: none;
    border-bottom: 1px solid #f8c954;
    font-weight: 700;
  }
`;

export const StyledInputSubmit = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  font-size: 0.9em;
  background-color: #f1f3ef;
  font-family: "JetBrains Mono", monospace;
  cursor: pointer;
  color: #004138;
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
  margin: 8px 0 8px 0;
  overflow: scroll;
  background: transparent;
  color: #c0cbb6;
  font-size: 1.1em;

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
  }
`;

export const StyledTitleForm = styled.h4`
  display: flex;
  text-align: center;
  margin-bottom: 30px;
  color: #f8c954;
`;
