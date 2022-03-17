import React from "react";
import BronzeIcon from "../../assets/icons/RSVamos_BronzeIcon.svg";
import GoldIcon from "../../assets/icons/RSVamos_GoldIcon.svg"
import SilverIcon from "../../assets/icons/RSVamos_SilverIcon.svg"
import { Wrapper } from "./LeaderBoard.style";
 import { useUsersFetch } from "../../hooks/useUsersFetch";

const LeaderBoard = () => {
  //const {state, loading,console.error();}
  return (
    <Wrapper>
      <h1>TOP USERS</h1>
      <ul>
        <li>
          <img src={GoldIcon} alt="First place icon"/>
          <h2>Player</h2>
          <p className="scoreNumber gold">Score</p>
        </li>
        <li>
          <img src={SilverIcon} alt="Second place icon"/>
          <h2>Player</h2>
          <p className="scoreNumber silver">Score</p>
        </li>
        <li>
          <img src={BronzeIcon} alt="Third place icon"/>
          <h2>Player</h2>
          <p className="scoreNumber bronze">Score</p>
        </li>
        
        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>
        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>
        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>
        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>
        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>
        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>

        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>

        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>

        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>

        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>

        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>

        <li>
          <p className="rank">X.</p>
          <h2>Player</h2>
          <p className="scoreNumber ">Score</p>
        </li>


      </ul>
      <article>        
        <p className="rank">X.</p>
        <h2>Me</h2>
        <p className="scoreNumber">Score</p>
      </article>
    </Wrapper>
  )
}

export default LeaderBoard;
