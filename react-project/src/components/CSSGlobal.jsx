import { createGlobalStyle } from 'styled-components';

const CssGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #1b1918ff;
    color: white;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    font-size: 15px;
    
  }

  h1 {
    font-size: 28 px;
  }


`;

export default CssGlobal;