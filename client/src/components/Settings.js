import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./Settings.styles";
// Images
import Back from "../assets/icons/RSVamos_ArrowBackIcon.svg";

const Settings = () => {
    return (
        <Wrapper>
            <div className="settings">
                <Link to="/settings">
                    <img src={Back} alt="Not-Found" id="arrowBackIcon" />
                </Link>
            </div>
            <h1>Settings and privacy</h1>

        </Wrapper>
    )
}

export default Settings;
