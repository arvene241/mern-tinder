import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
  }
  body {
    background-color: #F7F9F8;
  }

`;

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  margin: 0 auto;
  ${flex};
  flex-direction: column;
  padding: 0 20px;
  width: 90%;
  max-width: 1240px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

export default GlobalStyle;
