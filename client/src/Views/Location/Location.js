import React from "react";
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"


import { Wrapper } from "./Location.style";

const Location = () => {
  function dropDown() {
    let figure = document.querySelector("figure");
    let info = document.querySelector(".info");
    let text = document.querySelector(".text");
    // let p = $(<p></p>)
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
        <figure>
          <h2>Friendly</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure>
          <h2>Romantic</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure>
          <h2>Family</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure>
          <h2>Chill</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure>
          <h2>Solo</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure>
          <h2>Adventurous</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>

        <figure>
          <h2>Intensive</h2>
          <img className="info" src={DropIcon} alt="More info button" onClick={dropDown} />

          <figcaption className="text">
            <p>Alot of text</p>
          </figcaption>
        </figure>
      </section>

    </Wrapper>

  )
}

export default Location;
