import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: #000; /* Full black background */
    color: white; /* Optional: Set text color to white for readability */
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
