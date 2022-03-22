import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  animation: animateWrapper 0.5s;

  @keyframes animateWrapper {
    from {
      opacity: 0;

    } to {
      opacity: 1;

    }
  }

  h1 {
    margin-top: 30px;
    color: var(--darkBlue);
    font-weight: 500;
  }

  

  input {
    width: 90%;
    border: 0;
    border-bottom: 3px solid var(--darkBlue);
    font-family: 'Fredoka';
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #effafa;
    color: var(--darkBlue);
    height: 50px;

    ::placeholder {
      color: var(--dirtyBlue);
    }
  }

  .inputRequired {
    display: flex;
    justify-content: center;
    margin: 5% 0 5% 0;

    p {
      position: absolute;
      right: 7%;
      margin: 0;
      color: var(--darkBlue);
      font-size: 3.5rem;
      font-weight: bold;
    }
  }

  .imageUpload>input {
    display: none;
  }

  #backIcon {
    position: absolute;
    right: 41%;
    top: 8%;
    width: 95%;
    align: left;
    margin: 3%;
    height: 25px;
  }

  #imageIcon {
    position: absolute;
    left: 5%;
    height: 40px;
  }

`

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;

`
