import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  h1 {
    margin-top: 40px;
    color: var(--darkBlue);
  }

  p {
    color: var(--greyText);
  }

  input {
    margin: 5%;
    border: 0;
    border-bottom: 3px solid var(--darkBlue);
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #effafa;
    height: 50px;

    ::placeholder {
      color: var(--dirtyBlue);
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
    
`;

export const RegisterText = styled.div`
  display: flex;
  text-align: center;
  margin: 0 5% 0 5%;

  a {
    color: var(--darkBlue);
    font-weight: bold;
  }

`

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;

`
