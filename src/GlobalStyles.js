import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', serif;
    font-optical-sizing: auto;
    background-color: #f8f9fa;
    font-style: normal;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
`;

export default GlobalStyles;
