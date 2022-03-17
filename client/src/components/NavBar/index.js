import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Images
import HomePageIcon from "../../assets/icons/RSVamos_HomePageIcon.svg";
import LocationPageIcon from "../../assets/icons/RSVamos_LocationPageIcon.svg";
import LeaderBoardPageIcon from "../../assets/icons/RSVamos_LeaderBoardPageIcon.svg";
import ProfilePageIcon from "../../assets/icons/RSVamos_ProfilePageIcon.svg";
// Styles
import { Wrapper, Content, Image } from "./NavBar.styles";

const NavBar = () => {
  const [home, setHome] = useState(false);
  const [location, setLocation] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState(false);
  const [profile, setProfile] = useState(false);

  const loc = useLocation();

  const checkLocation = () => {
    switch (loc.pathname.substring(1)) {
      case "":
        setHome(true);
        setLocation(false);
        setLeaderBoard(false);
        setProfile(false);
        break;

      case "location":
        setHome(false);
        setLocation(true);
        setLeaderBoard(false);
        setProfile(false);
        break;

      case "leaderboard":
        setHome(false);
        setLocation(false);
        setLeaderBoard(true);
        setProfile(false);
        break;

      case "profile":
        setHome(false);
        setLocation(false);
        setLeaderBoard(false);
        setProfile(true);
        break;

      case "login":
        setHome(false);
        setLocation(false);
        setLeaderBoard(false);
        setProfile(true);
        break;

      case "register":
        setHome(false);
        setLocation(false);
        setLeaderBoard(false);
        setProfile(true);
        break;

      case "settings":
        setHome(false);
        setLocation(false);
        setLeaderBoard(false);
        setProfile(true);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    checkLocation();
  }, [loc]);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Image src={HomePageIcon} alt="HomePage" className={home ? "normal" : "whiteIcon"} />
        </Link>
        <Link to="/location">
          <Image src={LocationPageIcon} alt="LocationPage" className={location ? "normal" : "whiteIcon"} />
        </Link>
        <Link to="/leaderboard">
          <Image src={LeaderBoardPageIcon} alt="LeaderBoardPage" className={leaderBoard ? "normal" : "whiteIcon"} />
        </Link>
        {localStorage.userEmail ? (
          <Link to="/profile">
            <Image src={ProfilePageIcon} alt="ProfilePage" className={profile ? "normal" : "whiteIcon"} />
          </Link>
        ) : (
          <Link to="/login">
            <Image src={ProfilePageIcon} alt="ProfilePage" className={profile ? "normal" : "whiteIcon"} />
          </Link>
        )}

      </Content>
    </Wrapper>
  )
}

export default NavBar;
