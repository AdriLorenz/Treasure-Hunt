import React from "react";
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"
import { Wrapper } from "./Location.style";

const Location = () => {
  /*handleClick =()=>{

  }*/
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
    <h2>Category</h2>
    <img className="info" src={DropIcon} alt="More info button" />
    <img className="background" src="" alt="Themed after category"/>
    <figcaption>
      <p>Alot of text</p> 
    </figcaption>
  </figure>
</section>

    </Wrapper>

  )
}

export default Location;
