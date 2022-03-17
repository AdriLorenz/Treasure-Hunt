import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  h1 {
    margin-top: 40px;
    color: var(--darkBlue);
  }

  input {
    margin: 5%;
    border: 0;
    border-bottom: 3px solid var(--darkBlue);
    font-size: 1.75rem;
    font-weight: bold;
  }

  #arrowBackIcon {
    position: absolute;
    right: 1.5%;
    width: 15%;
    align: right;
    margin: 3%;
    height: 40px;
  }  
    
`;
