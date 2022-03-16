import styled from "styled-components";
export const Footer = styled.footer`
background-color: var(--darkBlue);
width: 100vw;
display: flex;
flex-direction: column;
justify-content:space-evenly;

//Using this global because we got some weird bugs
*{
  padding:0;
  margin:0;
}

section{
display: flex;
flex-direction: row;
justify-content:center;

  .footerLogo{
    width:35vw;
    padding: 10vw 0 5vw 
  }

  ul{
    height:auto;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;

    li{
      width:100%;
      height:12vw;
      display: flex;
      flex-direction: row;
      justify-content:center;
      gap:1.5vw;
      position: relative;

        img{
          top: 50%;
          transform: translateY(20%);
          height:7vw;
      }
      p{
        margin:0;
        line-height:1.5;
        font-size:1.5em;
        color: white;
        font-weight: bold;     
         }

      .whiteIcon{
        //Using "filter" to make an icon white
        filter: brightness(0) invert(1);
      }
    }
  }
  

}
.socialIcons{
        display: flex;
        flex-direction: row;
        gap: 10vw;

        img{
            width: 15vw;
            padding: 5vw 0 50vw;
             //Using "filter" to make an icon white
            filter: brightness(0) invert(1);
        }
  }
`



