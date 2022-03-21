import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Bt, TT } from "./Settings.styles";
// Images
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg";
import EnglishFlag from "../../assets/icons/RSVamos_EnglishIcon.svg";
import SpanishFlag from "../../assets/icons/RSVamos_SpanishIcons.svg";


const Settings = () => {

  return (
    <Wrapper>
      {localStorage.userEmail ? (
        <Link to="/profile">
          <img src={Back} alt="Not-Found" id="arrowBackIcon" />
        </Link>
      ) : (
        <Link to="/login">
          <img src={Back} alt="Not-Found" id="arrowBackIcon" />
        </Link>
      )
      }

      <h1>Settings and privacy</h1>

      <div className="image">
        <p id="lang">Language</p>
        <img src={EnglishFlag} alt="Not-Found" id="englishFlag" />
        <img src={SpanishFlag} alt="Not-Found" id="spanishFlag" />
      </div>

      <Bt>
        <p id="not">Notifications</p>
        <label className="switch" >
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </Bt>
      <Bt>
        <p id="cookies">Cookies</p>
        <label className="switch" >
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </Bt>
      <Bt>
        <p id="nightMode">Night mode</p>
        <label className="switch" >
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </Bt>
      <Bt>
        <p id="shareL">Share location</p>
        <label className="switch" >
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </Bt>
      <TT>
        <p>
          <b>Warning! This will allow us to know your location when you are
            in the app</b>
        </p>
      </TT>
      <br></br>
      <br></br>

      <div id="line"></div>
      <br></br>

      <p><b>Terms and Conditions</b></p>
      <p>
        Welcome to Ready, set, vamos!!
        These terms and conditions outline the rules and regulations for the use of
        Ready, set, vamos!'s App, located at Gran Canaria Street.
      </p>
      <p>
        By accessing this app we assume you accept these terms and conditions.
        Do not continue to use Ready, set, vamos! if you do not agree to take all
        of the terms and conditions stated on this page.
      </p>
      <p><b>Cookies</b></p>
      <p>
        We employ the use of cookies. By accessing Ready, set, vamos!,
        you agreed to use cookies in agreement with the Ready, set, vamos!'s
        Privacy Policy.
        Most interactive websites use cookies to let us retrieve the user’s details
        for each visit. Cookies are used by our app to enable the functionality
        of certain areas to make it easier for people visiting our app.
      </p>
      <p><b>License</b></p>
      <p>
        Unless otherwise stated, Ready, set, vamos! and/or its licensors own the
        intellectual property rights for all material on Ready, set, vamos!.
        All intellectual property rights are reserved. You may access this from
        Ready, set, vamos! for your own personal use subjected to restrictions set
        in these terms and conditions.
      </p>
      <p> You must not:</p>
      <p>- Republish material from Ready, set, vamos!</p>
      <p>- Sell, rent or sub-license material from Ready, set, vamos!</p>
      <p>- Reproduce, duplicate or copy material from Ready, set, vamos!</p>
      <p>- Redistribute content from Ready, set, vamos!</p>
      <p>
        This Agreement shall begin on the date hereof. Our Terms and Conditions were
        created with the help of the Terms And Conditions Template.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    </Wrapper >
  )
}

export default Settings;
