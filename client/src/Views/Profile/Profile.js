import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Hooks
import { useUserFetch } from "../../hooks/useUserFetch";
// Styles
import { Wrapper, Image, Button, Tabb } from "./Profile.styles";
// Images
import Sett from "../../assets/icons/RSVamos_SettingsIcon.svg";
import Profile from "../../assets/icons/RSVamos_ProfilePageIcon.svg";
import HoleIcon from "../../assets/icons/RSVamos_HoleIcon.svg";

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
          <br></br>

          <Tabb>
            <section id="main">
              <div id="tabs">
                <span class="diana" id="uno"></span>
                <a href="#uno" class="tab-e">Number Liked Routes</a>
                <span class="diana" id="dos"></span>
                <a href="#dos" class="tab-e">Number Completed Routes</a>
                <span class="diana" id="tres"></span>
                <a href="#tres" class="tab-e">Number Achievements</a>

                <div id="pnl_1">
                  <div>
                    <p>At solmen va esser necessi far uniform grammatica, pronunciation e
                      plu sommun paroles. Ma quande lingues coalesce, li grammatica del
                      resultant lingue es plu simplic e regulari quam ti del coalescent
                      lingues. Li nov lingua franca va esser plu simplic e regulari quam li
                      existent Europan lingues.</p>
                    <button class="button">Click Me</button>

                  </div>
                </div>

                <div id="pnl_2">
                  <div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores.</p>
                  </div>
                </div>

                <div id="pnl_3">
                  <div id="images">
                    <img id="hole" src={HoleIcon} alt="icon" />
                    <img id="hole" src={HoleIcon} alt="icon2" />
                    <img id="hole" src={HoleIcon} alt="icon3" />
                    <img id="hole" src={HoleIcon} alt="icon4" />
                    <img id="hole" src={HoleIcon} alt="icon5" />
                    <img id="hole" src={HoleIcon} alt="icon6" />
                    <img id="hole" src={HoleIcon} alt="icon7" />
                    <img id="hole" src={HoleIcon} alt="icon8" />
                    <img id="hole" src={HoleIcon} alt="icon9" />
                    <img id="hole" src={HoleIcon} alt="icon10" />
                    <img id="hole" src={HoleIcon} alt="icon11" />
                    <img id="hole" src={HoleIcon} alt="icon12" />
                    <img id="hole" src={HoleIcon} alt="icon13" />
                    <img id="hole" src={HoleIcon} alt="icon14" />
                    <img id="hole" src={HoleIcon} alt="icon15" />
                    <img id="hole" src={HoleIcon} alt="icon16" />
                    <img id="hole" src={HoleIcon} alt="icon17" />
                    <img id="hole" src={HoleIcon} alt="icon17" />
                  </div>
                </div>
              </div>
            </section>
          </Tabb>
        </>
      )
      }

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </Wrapper >
  )
}

export default Settings;
