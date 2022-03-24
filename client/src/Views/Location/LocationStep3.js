import React from "react";
import { Link, useNavigate } from "react-router-dom";

import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg"

import { ReactComponent as BlueStar } from '../../assets/icons/RSVamos_LeaderBoardPageIcon.svg';
import { ReactComponent as WhiteStar } from '../../assets/icons/RSVamos_WhiteStarIcon.svg';






import { Wrapper } from "./Location.style";

const LocationStep3 = () => {
  const navigate = useNavigate();

  const handleFirstTour = () => {
    navigate("/Map");
  }

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

  return (
    <Wrapper>
      <Link to="/LocationStep2">
        <img src={Back} alt="Not-Found" id="arrowBackIcon" />
      </Link>

      <article>
        <p>Step 1</p>
        <p>-</p>
        <p >Step 2</p>
        <p>-</p>
        <p className="stepHighlight">Step 3</p>
      </article>

      <h1>Finally choose your journey!</h1>

      <section>
        <figure className="routePackage">
          <h2 className="routePackageTitle" onClick={handleFirstTour}>What</h2>
          <div className="stars">
            <BlueStar className="star " />
            <BlueStar className="star " />
            <BlueStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>
        <figure className="routePackage">
        <h2 className="routePackageTitle" onClick={handleFirstTour}>Title</h2>
          <div>
            <BlueStar className="star " />
            <WhiteStar className="star " />
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
            <Link to="/Map">
              <p className="mapButton">Map</p>
            </Link>
          </figcaption>
        </figure>

      </section>


    </Wrapper>

  )
}

export default LocationStep3;
