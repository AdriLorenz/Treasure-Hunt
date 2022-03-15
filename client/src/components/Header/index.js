import React from "react";
import { useNavigate } from "react-router-dom";
// Images
import AppLogo from "../../assets/images/RSVamos_Logo.png";
// Styles
import { Wrapper, LogoImg } from "./Header.styles";


const Header = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  return (
    <Wrapper>
      <LogoImg src={AppLogo} alt='app-logo' onClick={handleHome} />
    </Wrapper>
  )

}

export default Header;
