import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --maxWidth: 1280px;

  --white: #fff;
  --lightBlue: #a8f0f4;
  --dirtyBlue: #a2d5e3;
  --darkBlue: #54b2cc;
  --lightGrey: #ededed;
  --greyText: #737373;
  --goldText: #c49047;
  --silverText: #929292;
  --bronzeText: #bc7546;
  --deleteRed: #ff7088;
  --logoutGrey: #ededed;
  --goal3: #279b48;
  --goal5: #ef402b;
  --goal7: #fdb713;
  --goal8: #8f1838;
  --goal11: #f99d26;
  --goal12: #cf8d2a;
  --goal13: #48773e;
  --goal15: #3eb049;
  --goal16: #02558b;
  --goal17: #183668;
}

* {
  list-style: none;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
}

body {
  margin: 0;
  margin-top: 90px;
  padding: 0;
  font-family: 'Fredoka';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 500px) {
    margin-top: 60px;
  }

}

`
