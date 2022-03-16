import styled from "styled-components";

export const Wrapper = styled.div`
  .carousel{
    overflow: hidden;
    position: relative;
  }
  .inner{
    white-space: nowrap;
    transition: transform 0.3s;
  }
  .indicators{
    display: flex;
    justify-content: center;
    position: absolute;
    gap:3vw;
    bottom:5vw;
    left:50%;
    transform: translateX(-50%);
  }
  .indicators > button {
    margin: 5px;
    height: 5vw;
    width: 5vw;
    border: 0;
    border-radius: 100%;
    color: var(--lightGrey);
    background-color: var(--lightGrey);
  }
  .indicators > button.active {
    background-color: var(--lightBlue);
    color: var(--greyText);
  }
  
    
`;

export const GG = styled.div`
    #globalGoals{
        width: 100%;
        figure{
            display: flex;
            flex-direction: row;
            width: 100%;
            margin: 0;

            img{
                width: 50%;
            }
            figcaption{
                height: 100%;
                width: 100%;
                margin: 5%;
                text-align: center;
            }

            #goal3{
              color: var(--goal3);
            }
            
            #goal7{
              color: var(--goal7);
            }
            
            #goal11{
              color: var(--goal11);
            }
            
            #goal13{
              color: var(--goal13);
            }
            
            #goal16{
              color: var(--goal16);
            }
            #goal5{
              color: var(--goal5);
            }
            
            #goal8{
              color: var(--goal8);
            }
            
            #goal12{
              color: var(--goal12);
            }
            
            #goal15{
              color: var(--goal15);
            }
            
            #goal17{
              color: var(--goal17);
            }
        }
        
    }
`

export const Content = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 0 6%;

    h1 {
        color: var(--greyText);
    }

    p {
        font-size:20px;
        color: var(--greyText);
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
