import styled from "styled-components";

import Friendly from "../../assets/images/photos/friendly.jpg"
import Romantic from "../../assets/images/photos/romantic.jpg"
import Family from "../../assets/images/photos/Family3.jpg"
import Chill from "../../assets/images/photos/Chill.jpg"
import Solo from "../../assets/images/photos/solo.jpg"
import Adventurous from "../../assets/images/photos/adventure.jpg"
import Tourist from "../../assets/images/photos/tourists.webp"
import Outdoors from "../../assets/images/photos/outdoor.jpg"
import Indoors from "../../assets/images/photos/indoors.jpg"
import Foodie from "../../assets/images/photos/foodie.jpg"






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

  .leaflet-routing-collapsible {
    display: none;
  }

  #arrowBackIcon {
    position: absolute;
    right: 41%;
    top: 10%;
    width: 95%;
    margin: 3%;
    height: 25px;
    z-index:999;

  }  
  #arrowBackIconMap {
    position: absolute;
    right: 41%;
    top: 10%;
    width: 95%;
    margin: 3%;
    height: 25px;
    z-index:999;
    //filter: brightness(0) invert(1);
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
  margin-bottom:40vw;

  &#mapSection {
    padding: 0;
  }

  #map {
    width: 390px;
    height: 699px !important;
    margin-top: 60px;
    margin-bottom: 85px;
    z-index: 100;
  }

  .leaflet-div-icon {
    border: 0;
    background: transparent;
  }

  .leaflet-left {
    left: 85%;
  }
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


        &#outdoorsId{
          background-image:url(${Outdoors});
          background-position: center;
        }
        &#indoorsId{
          background-image:url(${Indoors});
          background-position: center;
       }
       &#foodieId{
          background-image:url(${Foodie});
          background-position: center;
       }
        &#touristId{
          background-image:url(${Tourist});
          background-position: center;
        }

        &.onClickFigure{
          border-radius:15px 15px 0 0;
          margin-bottom:40vw;
        }

        .whiteCircle{
            border-radius:50%;
            position:absolute;
            top:50%;
            transform: translateY(-50%);
            left:5vw;
            width:8vw;
            height:8vw;
            background-color:white;
            .blueCircle{
              opacity:0%;
              border-radius:50%;
              position:absolute;
              top:50%;
              transform: translate(-50%, -50%);
              left:50%;
              width:4vw;
              height:4vw;
              background-color: var(--darkBlue);
            &.blueCircleActive{
                 opacity:100%;   
             }
          }
        }

        h2{
          position:relative;
          top:50%;
          transform: translateY(-50%);
          text-align: center;
          color: var(--white);
          font-size:10vw;
          font-weight: 500; 
          transition:  0.2s;
          }
          .info{
            //Using "filter" to make an icon white
              filter: brightness(0) invert(1);
              position:absolute;
              width:6vw;
              top:5vw;
              right:5vw;
              transition:  0.2s;
              &.onClickInfo{
                top:3vw;
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
      .nextPage{
        text-align: center;
        color: var(--darkBlue);
        font-size:8vw;
        font-weight: 700;
      }


      .routePackage{
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
          transform: translateY(-50%);
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




&.map{
  position:absolute;
  left:0;
  top:0;
  width: 100vw;
  height: 100vh;
  &.onClickSectionMap{
    overflow:hidden;
  }

  .mapImage{
    border-radius:0px;
            position:absolute;
            left:0;
            top:0;
            width: 100vw;
            height: 100vh;
            margin-bottom:0;
            background-color: var(--greyText);
            .mapInfo{
               position:absolute;
               width:10vw;
               bottom:30vw;
               transform: translateY(-50%);
               right:4vw;
               transition:  0.2s;
               z-index:10000000;
               //filter: brightness(0) invert(1);
             &.onClickInfoMap{
              bottom:35vw;
              transform:rotate(-180deg);
              filter: brightness(1) invert(0);
           }
             
             
         }
         .textMap{
           display:none;
          background-color:white;
          padding:0px;
          position:absolute;
          height:4vw;
          border:none;
          width:100%;
          top:90vh;
          left:0;
          z-index:999;
          opacity:0%;
          transition:  0.2s;
          &.onClickTextMap{
            display:block;
            padding:15px;
            top:55vh;
            height:120vw;
            opacity:100%;
          }
          p{
            color: var(--greyText);
            font-size:6vw;
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
              margin-top:5vw;
              font-size:7vw;
              font-weight: 500;
             }
            }

         }
         

}
  
}

       

 }
 
`
