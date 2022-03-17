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
    font-size: 1.5rem;
  }

  #arrowBackIcon {
    position: absolute;
    right: 41%;
    top: 10%;
    width: 95%;
    align: left;
    margin: 3%;
    height: 25px;
  }  

  p{
    text-align: left;
    margin-left: 10%;
    font-size: 1.2rem;
    color: var(--greyText);
   
    margin-right: 10%;
    
  }
  .image{
    width:100%;
    display: flex;
    justify-content: center;
    #lang{
      margin-left: 0;
      margin-right: 35%;
    }
    img{
      margin-right: 3%;
      width: 30px;
    }
    #spanishFlag{
      opacity: 40%;
    }
  }
  #line{
    border: 1px solid var(--darkBlue);
    margin-left: 10%;
    margin-right: 10%;

  }
    
`;


export const Bt = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  #not{
    margin-left: 0;
    margin-right: 35%;
  }
  #cookies{
    margin-left: 0;
    margin-right: 46%;
  }
  #nightMode {
    margin-left: 0;
    margin-right: 37%;
  }
  #shareL{
    margin-left: 0;
    margin-right: 30%;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-top: 4%;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--dirtyBlue);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 50px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export const TT = styled.div`
  p {
    text-align: left;
    margin-left: 10%;
    
    font-size: 1rem;
    color: var(--greyText);
    margin-bottom: 0 ;
  }
`
