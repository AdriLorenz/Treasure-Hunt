import styled from "styled-components";

import Friendly from "../../assets/images/photos/friendly.jpg"
import Romantic from "../../assets/images/photos/romantic.jpg"
import Family from "../../assets/images/photos/Family3.jpg"
import Chill from "../../assets/images/photos/Chill.jpg"
import Solo from "../../assets/images/photos/solo.jpg"
import Adventurous from "../../assets/images/photos/adventure.jpg"





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
  margin-bottom:20vw;

      figure{
        position:relative;
        height:30vw;
        border-radius:15px;
        width:100%;
        margin-bottom:10vw;
        background-repeat: no-repeat;
        background-size: cover;
        transition:  0.2s;


&#friendlyId{
  background-image:url(${Friendly});
  background-position: center;
}
&#romanticId{
  background-image:url(${Romantic});
  background-position: 0 -15vw;
}
&#familyId{
  background-image:url(${Family});
          background-position: 0;
}
&#chillId{
  background-image:url(${Chill});
          background-position: top;
}
&#soloId{
  background-image:url(${Solo});
          background-position: center;
}
&#adventurousId{
  background-image:url(${Adventurous});
          background-position: center;
}


        &.onClickFigure{
          border-radius:15px 15px 0 0;
          margin-bottom:40vw;

        }
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
              transform-origin: center;
              transition:  0.2s;

              &.onClickInfo{
                transform:rotate(-180deg);
              }      
          }

          figcaption{
            padding:15px;
            position:absolute;
            height:30vw;
            border-radius: 0 0 15px 15px;
            width:100%;
            top:0% ;
            border: solid 5px var(--darkBlue);
            border-top: none;

            z-index:-999;
            opacity:0%;
            transition:  0.2s;
            &.onClickText{
              top:100% ;
              opacity:100%;
            }      
  

            p{
              color: var(--greyText);
              font-size:5vw;
              font-weight: 400;      
            }
          }

      }
  }
`


