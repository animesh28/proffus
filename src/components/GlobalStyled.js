import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background:  #F7FCFF;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  a {
        text-decoration: none;
    }
`;
 
export default GlobalStyle;