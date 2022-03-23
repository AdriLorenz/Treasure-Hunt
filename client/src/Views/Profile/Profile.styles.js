import styled from "styled-components"

export const Wrapper = styled.div`


*{
  padding: 0;
  margin:0;
}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //text-align: center;
  animation: animateWrapper 0.5s;

  @keyframes animateWrapper {
    from {
      opacity: 0;

    } to {
      opacity: 1;

    }
  }

  #settingsIcon {
    position: absolute;
    right: 1.5%;
    width: 15%;
    align: right;
    margin: 3%;
    height: 40px;
  }

  #profileIcon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
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

`;

export const Button = styled.button`
  width: 50%;
  height: 60px;
  color: var(--lightGrey);
  border: 0;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: var(--dirtyBlue);
  font-size: 1.2rem;

`;

export const Tabb = styled.div`
#main{
  background-color: #fff;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px 0 30px 0;
  overflow: hidden;
}
#tabs{
  position: relative;
}

span.diana {
  position: fixed;
  display: none;
}

.diana + a {
  display: block;
  float: left;
  height: 70px;
  width: 33.3%;
  padding: 0 10px;
  border: 1px solid #ddd;
  background-color: #eee;
  margin-bottom: -1px;
  
  border-radius: 8px 8px 0 0;
  text-align: center;
  text-decoration:none;
}
.diana:target + a {
  background-color: #fff;
  border-bottom-color: #fff; 
}

#pnl_1, #pnl_2, #pnl_3{
  position: absolute;
  top: 70px;
  left: 0;
  border: none;
  clear: both;
  overflow: hidden;
}
//first and second "Sections"
  #pnl_1 > div, #pnl_2 > div{
    opacity: 0;
    transition: all 0.1s ease;
    padding: 10vw 5vw 0;
  }

  //Third "Section"
  #pnl_3 > div{
    opacity: 0;
    transition: all 0.1s ease;
    padding: 30px;
  }

#uno:target ~ #pnl_1, #dos:target ~ #pnl_2, #tres:target ~ #pnl_3{
  position: static;
  border: 1px solid #ddd;
}

#uno:target ~ #pnl_1 > div, #dos:target ~ #pnl_2 > div, #tres:target ~ #pnl_3 > div{
  opacity: 1;
  transition: all 1s ease;
}
#images{
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap:4vw;
}
.hole{
  width:100%;
  margin: auto;
}

.button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.tab-e {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.routePackage{
        z-index: 999;
        position:relative;
        height:10vw;
        border-radius:10px;
        width:100%;
        margin-bottom:5vw;
        transition:  0.2s;
        background-color:var(--dirtyBlue);
        padding:0 4vw;
        &.onClickFigure{
          border-radius:15px 15px 0 0;
          margin-bottom:65vw;
        }
        .routePackageTitle{
          display:inline-block;
          top:50%;
          transform: translateY(20%);
          color: var(--white);
          text-align:left;
          font-size:6vw;
          font-weight: 500; 
          transition:  0.2s;
        }
        div{
          position:ralitive;
          display:inline-block;
          height:5vw;
          top:50%;
          transform: translateY(30%);
          margin-left:30vw;
          .star{
            height:100%;
          }
        }
        .info{
          //Using "filter" to make an icon white
          filter: brightness(0) invert(1);
          position:absolute;
          width:5vw;
          top:5vw;
          transform: translateY(-50%);
          right:4vw;
          transition:  0.2s;
        }  
            .routePackageText{
              padding:15px;
              position:absolute;
              height:10vw;
              border-radius: 0 0 15px 15px;
              width:100%;
              top:0% ;
              left:0;
              border: solid 5px var(--dirtyBlue);
              border-top: none;
              z-index:-999;
              opacity:0%;
              transition:  0.2s;
              &.onClickText{
                top:100% ;
                height:60vw;
                opacity:100%;
                z-index: 0;
              }
                 p{
                  color: var(--greyText);
                  font-size:4.5vw;
                  font-weight: 400;
                  
                  &.descriptionTitles{
                   opacity:50%; 
                   font-weight: 500;
                  }
                  &.space{
                    margin-top:5vw;
                   }
                  &.descriptionTitles{
                    opacity:50%; 
                    font-weight: 500;
                   }
                   &.numberPT{
                    position:absolute;
                    top:15px;
                    right:15px;
                    font-size:6vw;
                    font-weight: 500;
                   }
                   &.mapButton{
                    position:absolute;
                    bottom:15px;
                    right:15px;
                    font-size:10vw;
                    font-weight: 500;
                    color:var(--darkBlue);
                   }
   
              }
            }
          }

`