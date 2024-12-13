// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// @font-face {
//   font-family: 'Montserrat';
//   src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
//   font-style: normal;
//   font-weight: 400; /* Regular */
// }

// @font-face {
//   font-family: 'Montserrat';
//   src: url('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
//   font-style: normal;
//   font-weight: 600; /* SemiBold */
// }

// @font-face {
//   font-family: 'Montserrat';
//   src: url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
//   font-style: normal;
//   font-weight: 500; /* Medium */
// }

// @font-face {
//   font-family: 'Montserrat';
//   src: url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
//   font-style: normal;
//   font-weight: 700; /* Bold */
// }

// @font-face {
//   font-family: 'Montserrat';
//   src: url('./assets/fonts/Montserrat-Italic.ttf') format('truetype');
//   font-style: italic;
//   font-weight: 400; /* Regular Italic */
// }

//  body {
//   margin: 0;
//   padding: 0;
//   font-family: 'Montserrat', Arial, sans-serif;
//   background: #000;
//   color: white;
//   overflow-x: hidden; /* Prevents horizontal scrollbars */
//   overflow-y: auto; /* Allows vertical scrolling */
// }

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// `;

// export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Fonts */
  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat-Italic.ttf') format('truetype');
    font-style: italic;
    font-weight: 400;
  }

  /* Root Settings */
  :root {
    --background-color: #000;
    --text-color: #fff;
    --font-primary: 'Montserrat', Arial, sans-serif;
  }

  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Page Defaults */
  html {
    font-size: clamp(14px, 1.5vw, 18px); /* Responsive font size */
    scroll-behavior: smooth; /* Smooth scrolling */
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    background: var(--background-color);
    color: var(--text-color);
    height: 100%;
    min-height: 100dvh; /* Dynamic viewport height */
    min-height: -webkit-fill-available; /* Safari fallback */
    overflow-x: hidden; /* Prevent horizontal scroll */
    overflow-y: auto; /* Allow vertical scrolling */
  }

  /* Consistent Elements */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
