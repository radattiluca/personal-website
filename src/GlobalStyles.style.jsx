import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

   
   html{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "JetBrains Mono", monospace;
        background-color: #004138;

    }

    body {
  cursor: url('/cursor.png'), auto;
}

/* body:hover {
  cursor: url('/cursor-hover.png'), auto;
} */




`;
