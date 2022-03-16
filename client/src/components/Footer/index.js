import React from "react";
import {useNavigate} from "react-router-dom";
// Images
import AppLogo from "../../assets/icons/RSVamos_Logo.png";
import LocationPageIcon from "../../assets/icons/RSVamos_LocationPageIcon.svg";
import EmailIcon from "../../assets/icons/RSVamos_EmailIcon.svg";
import PhoneIcon from "../../assets/icons/RSVamos_PhoneIcon.svg";
import FacebookIcon from "../../assets/icons/RSVamos_FacebookIcon.svg";
import TwitterIcon from "../../assets/icons/RSVamos_TwitterIcon.svg";
import InstagramIcon from "../../assets/icons/RSVamos_InstagramIcon.svg";
//Styles
import { Wrapper, LogoImg, Content, Image , Email, Phone, Location, SocialsIcons} from "./Footer.styles";

const Footer = () =>{
      return(
          <Wrapper>
               <Content>
                   <LogoImg src={AppLogo} alt='app-logo'/>
                   <Location>
                        <img src={LocationPageIcon} alt="locationIcon" className="whiteIcon"/>
                        <p className="location"> Gran Canaria Street</p>
                    </Location>
                    <Email>
                       <img src={EmailIcon} alt="emailIcon" className="emailIcon"/>
                       <p className="email"> Vamos@hotmail.com</p>
                    </Email>
                    <Phone>
                       <img src={PhoneIcon} alt="phoneIcon" className="phoneIcon"/> 
                       <p className="phone"> +34 69 69 69 696</p>
                    </Phone>
                    <SocialsIcons>
                        <Image src={FacebookIcon} alt="facebookIcon"/>
                        <Image src={TwitterIcon} alt="twitterIcon"/>
                        <Image src={InstagramIcon} alt="instagramIcon"/>  
                    </SocialsIcons>



               </Content>
               
          </Wrapper>
      )
}


export default Footer;