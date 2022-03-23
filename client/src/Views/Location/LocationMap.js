import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg"

import { Wrapper } from "./Location.style";

const LocationMap = () => {
  function dropDown(el) {
    let figure = el.parentElement;
    let info = figure.querySelector(".mapInfo");
    let text = figure.querySelector(".textMap");
    let section = figure.querySelector(".map");

    figure.classList.toggle("onClickFigureMap");
    info.classList.toggle("onClickInfoMap");
    text.classList.toggle("onClickTextMap");
    section.classList.toggle("onClickSectionMap");
  }
  return (
    <Wrapper>

      <Link to="/LocationStep3">
        <img src={Back} alt="Not-Found" id="arrowBackIcon" />
      </Link>
      <section className="map">
        <figure className="mapImage">
        <img className="mapInfo" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="textMap">
          <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
          </figcaption>

        </figure>
      </section>
    </Wrapper>

  )
}

export default LocationMap;
