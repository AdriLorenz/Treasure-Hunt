import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--lightBlue);
  padding: 0 0px;
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  border-top: 3px solid var(--darkBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:9999999;
  .icons {
    width: 100%;
  }

`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .whiteIcon {
    filter: brightness(0) invert(1);
  }

`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 20px;

`
