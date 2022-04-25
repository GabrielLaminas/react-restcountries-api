import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar{
    width: 10px;
    background-color: hsl(209, 23%, 22%);
    border-radius: 10px;
    
  }

  body::-webkit-scrollbar-thumb{
    background-color: rgba(247, 255, 251, .12);
    border-radius: 10px;
  }

  body{
    font-family: 'Nunito Sans', sans-serif;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;