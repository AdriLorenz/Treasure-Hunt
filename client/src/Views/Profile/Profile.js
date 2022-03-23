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

import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"

import { ReactComponent as BlueStar } from '../../assets/icons/RSVamos_LeaderBoardPageIcon.svg';
import { ReactComponent as WhiteStar } from '../../assets/icons/RSVamos_WhiteStarIcon.svg';


const Settings = () => {
  function dropDown(el) {
    let figure = el.parentElement;
    let info = figure.querySelector(".info");
    let title = figure.querySelector(".routePackageTitle");
    let text = figure.querySelector(".routePackageText");

    figure.classList.toggle("onClickFigure");
    info.classList.toggle("onClickInfo");
    title.classList.toggle("onClickTitle");
    text.classList.toggle("onClickText");
  }

  const { state: user } = useUserFetch(localStorage.userEmail);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate("/update-profile");
  };

  console.log(user);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("test").click();
    }, 500)
    
  }, [])

  
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
                <a href="#uno" id="test" class="tab-e">Number Liked Routes</a>
                <span class="diana" id="dos"></span>
                <a href="#dos" class="tab-e">Number Completed Routes</a>
                <span class="diana" id="tres"></span>
                <a href="#tres" class="tab-e">Number Achievements</a>

                <div id="pnl_1">
                  <div>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>

                  </div>
                </div>

                <div id="pnl_2">
                <div>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>
        <figure className="routePackage">
          <h2 className="routePackageTitle" >Title</h2>
          <div>
            <BlueStar className="star " />
            <BlueStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
            <WhiteStar className="star " />
          </div>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="routePackageText">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
            <p className="mapButton">Map</p>
          </figcaption>
        </figure>

                  </div>
                </div>

                <div id="pnl_3">
                  <div id="images">
                    <img className="hole" src={HoleIcon} alt="icon" />
                    <img className="hole" src={HoleIcon} alt="icon2" />
                    <img className="hole" src={HoleIcon} alt="icon3" />
                    <img className="hole" src={HoleIcon} alt="icon4" />
                    <img className="hole" src={HoleIcon} alt="icon5" />
                    <img className="hole" src={HoleIcon} alt="icon6" />
                    <img className="hole" src={HoleIcon} alt="icon7" />
                    <img className="hole" src={HoleIcon} alt="icon8" />
                    <img className="hole" src={HoleIcon} alt="icon9" />
                    <img className="hole" src={HoleIcon} alt="icon10" />
                    <img className="hole" src={HoleIcon} alt="icon11" />
                    <img className="hole" src={HoleIcon} alt="icon12" />
                    <img className="hole" src={HoleIcon} alt="icon13" />
                    <img className="hole" src={HoleIcon} alt="icon14" />
                    <img className="hole" src={HoleIcon} alt="icon15" />
                    <img className="hole" src={HoleIcon} alt="icon16" />
                    <img className="hole" src={HoleIcon} alt="icon17" />
                    <img className="hole" src={HoleIcon} alt="icon17" />
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
