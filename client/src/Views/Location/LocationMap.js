import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg"

import { Wrapper } from "./Location.style";

const LocationMap = () => {
  function dropDown(el) {
    let figure=el.parentElement;
    let info = figure.querySelector(".info");
    let text = figure.querySelector(".text");

    figure.classList.toggle("onClickFigure");
    info.classList.toggle("onClickInfo");
    text.classList.toggle("onClickText");
  }
  return (
    <Wrapper>
      
      <Link to="/LocationStep3">
        <img src={Back} alt="Not-Found" id="arrowBackIcon" />
      </Link>
      <figure className="mapImage">
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
      
      </figure>
    </Wrapper>

  )
}

export default LocationMap;
