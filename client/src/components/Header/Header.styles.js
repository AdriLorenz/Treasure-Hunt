import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--lightBlue);
  padding: 0 20px;
  width: 100%;
  height: 90px;
  border-bottom: 3px solid var(--darkBlue);
  z-index: 1000000;

  position: fixed;
  top: 0;

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

