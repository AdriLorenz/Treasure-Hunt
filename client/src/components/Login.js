import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper} from "./Login.styles";
// Images
import Settings from "../assets/icons/RSVamos_SettingsIcon.svg";

const Login = () => {
  return (
    <Wrapper>
      <div className="settings">
        <Link to="/settings">
          <img src={Settings} alt="Not-Found" id="settingsIcon" />
        </Link>
      </div>
      <h1>Login</h1>
      <input
        type='text'
        name='username'
        placeholder='Username'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
      />
    </Wrapper>
    
  )
}

export default Login;
