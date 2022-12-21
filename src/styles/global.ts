import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    appearance: none;
    outline: none;
    border: none;
    text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${(props) => props.theme.color.gray[900]};
    color: ${(props) => props.theme.color.gray[300]};
  }

  body, input, button, textarea {
    font: 400 16px "Roboto", sans-serif;
  }
`;
