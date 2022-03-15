import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --maxWidth: 1280px;

  --white: #fff;
  --lightBlue: #a8f0f4;
  --fadedBlue: #a2d5e3;
  --darkBlue: #54b2cc;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  margin-top: 90px;
  padding: 0;
  font-family: 'Fredoka';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
