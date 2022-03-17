import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";


export const Wrapper = styled.div`

*{
    padding:0;
    margin:0;
}

  article{
      display: flex;
      flex-direction: row;
      justify-content:center;
      gap: 1vw;
      padding-top: 10px;
      color: var(--lightBlue);
      //font-weight: normal;

      
  }


section{
width:100%;
padding:0 5vw;
    figure{
        h2{

        }
        .info{
width:50px;
        }
        img{

        }
    }
}
`