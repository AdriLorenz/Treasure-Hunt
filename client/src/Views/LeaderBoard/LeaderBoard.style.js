import styled from "styled-components";


export const Wrapper = styled.div`

  animation: animateWrapper 0.5s;

  @keyframes animateWrapper {
    from {
      opacity: 0;

    } to {
      opacity: 1;

    }
  }

  //Using this global because we got some weird bugs
  *{
    padding:0;
    margin:0;
  }
  h1{
      text-align: center;
      color: var(--darkBlue);
      padding-top: 10vw;
      font-size:9vw;
      font-weight: bold;     
  }
  ul{
      width:100%;
      padding:0 5vw;
      margin-bottom:50vw;
      li{
          height:17vw;
          width:100%;
          display:flex;
          border-bottom: solid 2px var(--darkBlue);
          margin-bottom:1vw;
          img{
              width:8vw;
          }
          .rank{
              color: var(--greyText);
              position:relative;
              top:50%;
              transform: translateY(-25%);
              font-size:9vw;
              font-weight: 400;     
          }
          h2{
              margin-left:1.5vw;
              position:relative;
              top:50%;
              transform: translateY(-25%);
              color: var(--greyText);
              font-size:9vw;
              font-weight: 400;     
          }
          .scoreNumber{
              color: var(--greyText);
              position:relative;
              top:50%;
              transform: translateY(-25%);
              margin-left: auto;
              font-size:9vw;
              font-weight: 400;     
          }
          .gold{
              color:var(--goldText);
          }
          .silver{
              color:var(--silverText);
          }
          .bronze{
              color:var(--bronzeText);
          }
      }
  }
  article{
      position:fixed;
      padding: 5vw 5vw;
      width:100%;
      display:flex;
      background-color:#54b2ccea;
      bottom:27vw;
      .rank{
          color: var(--white);
          font-size:9vw;
          font-weight: 600;     
      }
      h2{
          margin-left:1.5vw;
          color: var(--white);
          font-size:9vw;
          font-weight: 600;     
      }
      .scoreNumber{
          color: var(--white);
          margin-left: auto;
          font-size:9vw;
          font-weight: 600;     
      }

  }
`