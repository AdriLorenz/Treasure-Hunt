import React from "react";
import { Link } from "react-router-dom";

import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg"





import { Wrapper } from "./Location.style";

const LocationStep2 = () => {
  function dropDown(el) {
    let figure = el.parentElement;
    let info = figure.querySelector(".info");
    let title = figure.querySelector(".title");
    let text = figure.querySelector(".text");

    figure.classList.toggle("onClickFigure");
    info.classList.toggle("onClickInfo");
    title.classList.toggle("onClickTitle");
    text.classList.toggle("onClickText");
  }

  function multiSelect(el) {
    let figure = el.parentElement;
    let blueCircle = figure.querySelector(".blueCircle");

    blueCircle.classList.toggle("blueCircleActive");
  }

  return (
    <Wrapper>
      <Link to="/Location">
        <img src={Back} alt="Not-Found" id="arrowBackIcon" />
      </Link>
      <article>
        <p>Step 1</p>
        <p>-</p>
        <p className="stepHighlight">Step 2</p>
        <p>-</p>
        <p>Step 3</p>
      </article>

      <h1>What are you feeling?</h1>

      <section>
        <figure id="outdoorsId">
          <div className="whiteCircle">
            <div className="blueCircle"></div>
          </div>
          <h2 className="title" onClick={e => multiSelect(e.target)}>Outdoors</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Do you like going outside? Some fresh air and pretty places. Then this is for you.</p>
          </figcaption>
        </figure>

        <figure id="indoorsId">
          <div className="whiteCircle">
            <div className="blueCircle"></div>
          </div>
          <h2 className="title" onClick={e => multiSelect(e.target)}>Indoors</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>For the people that like doing activities without worrying about the weather. This includes every kind of activities.</p>
          </figcaption>
        </figure>

        <figure id="foodieId">
          <div className="whiteCircle">
            <div className="blueCircle"></div>
          </div>
          <h2 className="title" onClick={e => multiSelect(e.target)}>Foodie</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Having food is great. Here you can discover a lot of places with incredible tastes.</p>
          </figcaption>
        </figure>

        <figure id="touristId">
          <div className="whiteCircle">
            <div className="blueCircle"></div>
          </div>
          <h2 className="title" onClick={e => multiSelect(e.target)}>Tourist</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Great for getting to know new places. Discover landmarks from all over the city.</p>
          </figcaption>
        </figure>
        <Link to="/LocationStep3">
          <p className="nextPage">Next</p>
        </Link>
      </section>


    </Wrapper>

  )
}

export default LocationStep2;
