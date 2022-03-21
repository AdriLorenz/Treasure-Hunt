import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  #arrowBackIcon {
    position: absolute;
    right: 41%;
    top: 8%;
    width: 95%;
    align: left;
    margin: 3%;
    height: 25px;
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

  #cameraIcon {
    width: 60%;
    align: center;
  }

  #profileImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;

  }

  .imageUpload {
    display: flex;
    align-items: center;
    position: absolute;
    width: 150px;
    height: 150px;
  }

  .imageUpload > input {
    display: none;
  }

`;

export const EditName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  #rewriteIcon {
    margin-top: 5%;
    margin-left: 1%;
    width: 7%;
  }

`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-weight: 500;
    font-size: 1.75rem;
  }

  input {
    width: 100%;
    margin: 3% 0 3% 0;
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

  .bottomButtons {
    width: 100%;
  }

`

export const SaveButton = styled.button`
  width: 50%;
  height: 60px;
  color: var(--dirtyBlue);
  border: 7px solid var(--dirtyBlue);
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: white;
  font-size: 1.2rem;

`;

export const LogoutButton = styled.button`
  width: 47.5%;
  margin-right: 5%;
  height: 60px;
  color: #b5b5b5;
  border: 7px solid var(--lightGrey);
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: white;
  font-size: 1.2rem;

`;

export const DeleteButton = styled.button`
  width: 47.5%;
  height: 60px;
  color: var(--deleteRed);
  border: 7px solid var(--deleteRed);
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: white;
  font-size: 1.2rem;

`;
