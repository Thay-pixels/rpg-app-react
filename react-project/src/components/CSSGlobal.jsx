import { createGlobalStyle } from 'styled-components';

const CssGlobal = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #1b1918ff;
    color: white;
    overflow-x: hidden;

  }

  p {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    font-size: 18px;
    
  }

  

  h1 {
    font-size: 28px;
  }


`;

export default CssGlobal;