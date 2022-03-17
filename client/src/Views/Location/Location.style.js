import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";


export const Wrapper = styled.div`

  animation: animateWrapper 0.5s;

  @keyframes animateWrapper {
    from {
      opacity: 0;

    } to {
      opacity: 1;

    }
  }

  *{
      padding:0;
      margin:0;
  }

    article{
        display: flex;
        flex-direction: row;
        justify-content:center;
        gap: 1vw;
        padding: 5vw 0;
        color: var(--darkBlue);
        font-weight: 600;
        font-size: 4.5vw;
        

        p{
          opacity: 50%;
        }
        .stepHighlight{
          opacity: 100%;
        }
    }

   h1{
     text-align: center;
      color: var(--darkBlue);
      font-size:10vw;
      font-weight: bold;  
      width:70%;
      margin:auto;
   }


  section{
  width:100%;
  padding:10vw 5vw;

      figure{
        position:relative;
        height:30vw;
        border-radius:15px;
        width:100%;
        background-color:var(--darkBlue);

        h2{
          position:relative;
          top:50%;
          transform: translateY(-50%);
          text-align: center;
          color: var(--white);
          font-size:10vw;
          font-weight: 500;  
          }
          .info{
            //Using "filter" to make an icon white
              filter: brightness(0) invert(1);
              position:absolute;
              width:6vw;
              top:5vw;
              right:5vw;
          }
          .background{
            width:100%;
            height:100%;
            position:absolute;
            top:0;
            left:0;
          }

          figcaption{
            padding:15px;
            position:absolute;
            height:30vw;
            border-radius: 0 0 15px 15px;
            width:100%;
            top:100% ;
            border: solid 3px var(--darkBlue);
            z-index:-999;
            p{
              color: var(--greyText);
              font-size:5vw;
              font-weight: 400;      
            }
          }
      }
  }
`