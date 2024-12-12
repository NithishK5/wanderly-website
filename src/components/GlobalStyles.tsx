import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
  font-style: normal;
  font-weight: 400; /* Regular */
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
  font-style: normal;
  font-weight: 600; /* SemiBold */
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
  font-style: normal;
  font-weight: 500; /* Medium */
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
  font-style: normal;
  font-weight: 700; /* Bold */
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-Italic.ttf') format('truetype');
  font-style: italic;
  font-weight: 400; /* Regular Italic */
}


  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Arial, sans-serif; /* Use Montserrat as the default font */
    background: #000; /* Full black background */
    color: white; /* Optional: Set text color to white for readability */
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
