import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

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
    #englishFlag{
      align: right;
    }
    #spanishFlag{
      opacity: 40%;
    }

  }
  
    
`;
