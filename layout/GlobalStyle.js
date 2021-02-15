import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  @font-face {
    font-family: '04b_30';
    src: url('https://api.chucknorris.io/font/04b_30.woff') format('woff'),
      url('https://api.chucknorris.io/font/04b_30.ttf') format('truetype');
  }
  
  *{
    box-sizing: border-box;
  }

  :root {
    ${variables}
  } 

  html,
  body {
    background: var(--bg);
    color: var(--black);
    font-family: var(--font-family);
    font-size: var(--font);
    height: 100%;
    width: 100%;
  }

  h1, h2, h3 {
    color:var(--primary);
    font-family: var(--font-family-header);
    text-shadow: 1px 1px var(--white), 2px 2px var(--gray);
  }

  h1{
    font-size: 1.5rem;
  }

  h2{
    font-size: 1.25rem;
  }

  #__next{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }

  main{
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: var(--space-md);
  }


  a {
    color: var(--primary);
    text-decoration: none;

    &:hover{
      color: var(--primary-lighten);
    }
  }
`;
