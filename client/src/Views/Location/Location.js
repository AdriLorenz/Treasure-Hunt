import React from "react";
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"


import { Wrapper } from "./Location.style";

const Location = () => {
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
      <article>
        <p className="stepHighlight">Step 1</p>
        <p>-</p>
        <p>Step 2</p>
        <p>-</p>
        <p>Step 3</p>
      </article>

      <h1>What is your group?</h1>

      <section>
        <figure id="friendlyId">
          <h2>Friendly</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e=>dropDown(e.target)} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>
 
        <figure id="romanticId">
          <h2>Romantic</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e=>dropDown(e.target)} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="familyId">
          <h2>Family</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e=>dropDown(e.target)} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="chillId">
          <h2>Chill</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e=>dropDown(e.target)} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="soloId">
          <h2>Solo</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e=>dropDown(e.target)} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure id="adventurousId">
          <h2>Adventurous</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={e=>dropDown(e.target)} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure> 
        </section>

    </Wrapper>

  )
}

export default Location;
