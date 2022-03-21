import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //text-align: center;
  animation: animateWrapper 0.5s;

  @keyframes animateWrapper {
    from {
      opacity: 0;

    } to {
      opacity: 1;

    }
  }

  #settingsIcon {
    position: absolute;
    right: 1.5%;
    width: 15%;
    align: right;
    margin: 3%;
    height: 40px;
  }

  #profileIcon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
  
  h1 {
    color: var(--greyText);
    margin-bottom: 0;
    font-weight: 500;
  }
  
  h2 {
    color: #b5b5b5;
    margin-top: 0;
    font-weight: 500;
  }

`;

export const Image = styled.div`
  margin-top: 10%;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightGrey);
  border-radius: 100%;

`;

export const Button = styled.button`
  width: 50%;
  height: 60px;
  color: var(--lightGrey);
  border: 0;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: var(--dirtyBlue);
  font-size: 1.2rem;

`;
