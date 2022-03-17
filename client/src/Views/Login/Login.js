import React from "react";
import { Link } from "react-router-dom";
// Components
import Button from "../../components/Button";
// Styles
import { Wrapper, RegisterText, SubmitButton } from "./Login.styles";
// Images
import Settings from "../../assets/icons/RSVamos_SettingsIcon.svg";

const Login = () => {
  const handleSubmit = () => {}

  return (
    <Wrapper>
      <Link to="/settings">
        <img src={Settings} alt="Not-Found" id="settingsIcon" />
      </Link>
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
      <SubmitButton>
        <Button text='Next' callback={handleSubmit} />
      </SubmitButton>
      <RegisterText>
        <p>
          Asking yourself "Why have an account?". This is 
          necessary for the complete use of the app and also 
          allows you to earn points and achivements. So, create 
          and account and stat discovering and meeting people. 
          <a href="/register"> Register here</a>
        </p>
      </RegisterText>
    </Wrapper>

  )
}

export default Login;
