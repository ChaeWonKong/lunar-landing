import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

  ${reset}
  *{
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  *:focus {
    outline: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    background: black;
    color: white;
}

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  /* Bungee Shade = English Console-like TITLE font face */
  @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

  /* Press Start 2P = English Console-like font face */
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  /* Korean Console-like font face */
  @font-face {
    font-family: 'DOSGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyles;
