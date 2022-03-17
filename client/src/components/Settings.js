import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./Settings.styles";
// Images
import Back from "../assets/icons/RSVamos_ArrowBackIcon.svg";
import EnglishFlag from "../assets/icons/RSVamos_EnglishIcon.svg";
import SpanishFlag from "../assets/icons/RSVamos_SpanishIcons.svg";


const Settings = () => {
    return (
        <Wrapper>
            <Link to="/login">
                <img src={Back} alt="Not-Found" id="arrowBackIcon" />
            </Link>
            <h1>Settings and privacy</h1>

            <div className="image">
                <p id="lang">Language</p>
                <img src={EnglishFlag} alt="Not-Found" id="englishFlag" />
                <img src={SpanishFlag} alt="Not-Found" id="spanishFlag" />
            </div>
            <p>Notifications</p>
            <p>Cookies</p>
            <p>Night mode</p>
            <p>Share location</p>
            <p>Terms of service</p>


        </Wrapper>
    )
}

export default Settings;
