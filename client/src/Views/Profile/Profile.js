import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Hooks
import { useUserFetch } from "../../hooks/useUserFetch";
// Styles
import { Wrapper, Image, Button } from "./Profile.styles";
// Images
import Sett from "../../assets/icons/RSVamos_SettingsIcon.svg";
import Profile from "../../assets/icons/RSVamos_ProfilePageIcon.svg";

const Settings = () => {
  const { state: user } = useUserFetch(localStorage.userEmail);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate("/update-profile");
  };

  console.log(user);

  return (
    <Wrapper>
      {user && (
        <>
          <Link to="/settings">
            <img src={Sett} alt="Not-Found" id="settingsIcon" />
          </Link>
          <Image>
            <img
              src={user.user_img_path == ""
                ? Profile
                : "http://localhost:5000/" + user.user_img_path
              }
              alt="Not-Found"
              id="profileIcon"
            />
          </Image>
          <h1>{user.user_name}</h1>
          <h2>Score: {user.user_score}</h2>
          <Button type="button" onClick={handleSubmit}>Edit profile</Button>
        </>
      )}

    </Wrapper>
  )
}

export default Settings;
