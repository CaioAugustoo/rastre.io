import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --brand-primary-color: #FF124B;
    --full-black: #000000;
    --text-secondary-color: #333333;
    --full-white: #ffffff;

    --primary-shadow: 0px 18px 41px rgba(0, 0, 0, 0.05);

    --font-family-primary: 'Poppins', sans-serif;

    font-size: 62.5%;
  }
  body {
    color: var(--full-black);
    font-family: var(--font-family-primary);
  }

  body, button, input, h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-primary);
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
export default GlobalStyles;

export const Container = styled.div`
  max-width: 170rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;
