import React from "react";
// Images
import AppLogo from "../../assets/images/RSVamos_Logo.png";
//Styles
import { Wrapper, LogoImg, Content, Image , Email, Phone, Location, SocialsIcons} from "./Footer.styles";

import {useNavigate} from "react-router-dom";
// Images

import LocationPageIcon from "../../assets/images/RSVamos_LocationPageIcon.svg";
import EmailIcon from "../../assets/images/RSVamos_EmailIcon.svg";
import PhoneIcon from "../../assets/images/RSVamos_PhoneIcon.svg";
import FacebookIcon from "../../assets/images/RSVamos_FacebookIcon.svg";
import TwitterIcon from "../../assets/images/RSVamos_TwitterIcon.svg";
import InstagramIcon from "../../assets/images/RSVamos_InstagramIcon.svg";

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