import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    background-color: #f5f5f7;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #111;
  }

  a {
    color: #007aff;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #0056b3;
  }
`;

export default GlobalStyle;
