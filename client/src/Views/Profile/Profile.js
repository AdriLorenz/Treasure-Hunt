import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Styles
import { Wrapper } from "./Profile.styles";
// Components
import ButtonEP from "../../components/ButtonEditProfile";
// Images
import Sett from "../../assets/icons/RSVamos_SettingsIcon.svg";
import Profile from "../../assets/icons/RSVamos_ProfilePageIcon.svg";

const Settings = () => {
    const navigate = useNavigate();
    const handleSubmit = async () => {
        navigate("/settings");
    };
    return (
        <Wrapper>
            <Link to="/settings">
                <img src={Sett} alt="Not-Found" id="settingsIcon" />
            </Link>
            <div>
                <img src={Profile} alt="Not-Found" id="profileIcon" />
            </div>
            <h1>Username</h1>
            <h2>Score</h2>
            <ButtonEP text='Next' callback={handleSubmit}></ButtonEP>


        </Wrapper>
    )
}

export default Settings;
