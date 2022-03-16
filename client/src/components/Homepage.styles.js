import styled from "styled-components";

export const Wrapper = styled.div`
  .carousel{
    overflow: hidden;
  }
  .inner{
    white-space: nowrap;
    transition: transform 0.3s;
  }
  .indicators{
    display: flex;
    justify-content: center;
    
  }
  .indicators > button {
    margin: 5px;
    border: 0;
    border-radius: 100%;
    color: var(--lightGrey);
    background-color: var(--lightGrey);
  }
  .indicators > button.active {
    background-color: var(--greyText);
    color: var(--greyText);
  }
  
    
`;

export const gg = styled.div`
    #globalGoals{
        width: 100%;
        figure{
            display: flex;
            flex-direction: row;
            width: 100%;

            img{
                width: 50%;
            }
            figcaption{
                height: 100%;
                width: 100%;
                background-color: darkBlue;
            }
            /* #goal3,#goal7,#goal11,#goal13,#goal16{
            align: left;
            width: 50%;
    
            }   
            #goal5,#goal8,#goal12,#goal15,#goal17{
                align: right;
                width: 200px;
            } */
        }
        
    }
` 

export const Content = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 0 6%;

    p {
        font-size:20px;
    }

    #logo {
        width: 200px;
        align: center;
    }
    #gglogo{
        width: 300px;
        align: center;
    }
`

export const CarouselItem = styled.div`
    background: url(${({ image }) => image});
    background-size: 100%, fill;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: inline-flex;
    /* align-items: center;
    justify-content: center; */
    height: 700px;
    width: 100%;

    @media screen and (max-width: 500px) {
        height: 350px;
    }

`
