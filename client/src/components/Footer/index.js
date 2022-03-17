import React from "react";
import { useNavigate } from "react-router-dom";
// Images
import AppLogo from "../../assets/icons/RSVamos_Logo.png";
import LocationPageIcon from "../../assets/icons/RSVamos_LocationPageIcon.svg";
import EmailIcon from "../../assets/icons/RSVamos_EmailIcon.svg";
import PhoneIcon from "../../assets/icons/RSVamos_PhoneIcon.svg";
import FacebookIcon from "../../assets/icons/RSVamos_FacebookIcon.svg";
import TwitterIcon from "../../assets/icons/RSVamos_TwitterIcon.svg";
import InstagramIcon from "../../assets/icons/RSVamos_InstagramIcon.svg";
//Styles
import { Footer } from "./Footer.styles";

const FooterComp = () => {
    return (
        <Footer>
            <section>
                <img className="footerLogo" src={AppLogo} alt="logo" />
            </section>
            <section>
                <ul>
                    <li>
                        <img src={LocationPageIcon} alt="locationIcon" className="whiteIcon" />
                        <p> Gran Canaria Street</p>
                    </li>
                    <li>
                        <img src={EmailIcon} alt="emailIcon" />
                        <p> Vamos@hotmail.com</p>
                    </li>
                    <li>
                        <img src={PhoneIcon} alt="phoneIcon" />
                        <p> +34 69 69 69 696</p>
                    </li>
                </ul>
            </section>
            <section className="socialIcons">
                <img src={InstagramIcon} alt="instagramIcon" />
                <img src={FacebookIcon} alt="facebookIcon" />
                <img src={TwitterIcon} alt="twitterIcon" />
            </section>


        </Footer>

    )
}


export default FooterComp;