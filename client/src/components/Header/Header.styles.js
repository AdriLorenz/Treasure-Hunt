import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: var(--lightBlue);
  padding: 0 20px;
  width: 100%;
  height: 90px;
  border-bottom: 3px solid var(--darkBlue);
  z-index: 1000000;

  @media screen and (max-width: 500px) {
    height: 60px;
  }

`;

export const LogoImg = styled.img`
  padding-top: 5px;
  width: 150px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 90px;
  }
`;

