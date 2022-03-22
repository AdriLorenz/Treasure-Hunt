import React from "react";
import { Link } from "react-router-dom";
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"


import { Wrapper } from "./Location.style";

const Location = () => {
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
  return (
    <Wrapper>
      <article>
        <p className="stepHighlight">Step 1</p>
        <p>-</p>
        <p>Step 2</p>
        <p>-</p>
        <p>Step 3</p>
      </article>

      <h1>What is your group?</h1>

      <section>
        < figure id="friendlyId">
          <Link to="/LocationStep2">
            <h2 className="title">Friendly</h2>
          </Link>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="romanticId">
          <Link to="/LocationStep2">
            <h2 className="title">Romantic</h2>
          </Link>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="familyId">
          <Link to="/LocationStep2">
            <h2 className="title">Family</h2>
          </Link>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="chillId">
          <Link to="/LocationStep2">
            <h2 className="title">Chill</h2>
          </Link>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="soloId">
          <Link to="/LocationStep2">
            <h2 className="title">Solo</h2>
          </Link>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="adventurousId">
          <Link to="/LocationStep2">
            <h2 className="title">Adventurous</h2>
          </Link>
          <img className="info" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

      </section>

    </Wrapper >

  )
}

export default Location;
