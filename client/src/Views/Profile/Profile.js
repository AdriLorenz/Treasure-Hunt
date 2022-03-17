import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Bt, TT } from "./Profile.styles";
// Images
import Sett from "../../assets/icons/RSVamos_SettingsIcon.svg";
import Profile from "../../assets/icons/RSVamos_ProfilePageIcon.svg";

const Settings = () => {

    return (
        <Wrapper>
            <Link to="/settings">
                <img src={Sett} alt="Not-Found" id="settingsIcon" />
            </Link>
            <div>
                <img src={Profile} alt="Not-Found" id="profileIcon" />
            </div>
            <h1></h1>


        </Wrapper>
    )
}

export default Settings;
