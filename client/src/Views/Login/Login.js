import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
// API
import API from "../../API";
// Components
import Button from "../../components/Button";
// Styles
import { Wrapper, RegisterText, SubmitButton } from "./Login.styles";
// Images
import Settings from "../../assets/icons/RSVamos_SettingsIcon.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }

  const handleSubmit = async () => {
    try {
      
      if (validator.isEmail(email)) {

        if (password != '') {

          setLoading(true);

          const body = {
            user_email: email,
            user_password: password
          }

          API.login(body).then(() => {
            localStorage.setItem('userEmail', email);
            navigate("/profile");

          }).catch(() => {
            setError(true);
            setTimeout(() => {
              setError(false);
              setLoading(false);
              setEmail('');
              setPassword('');
              window.location.reload();
            }, 2000);

          });

          setLoading(false);

        } else {
          setPassError(true);
          setTimeout(() => {
            setPassError(false)
          }, 2000)
        }

      } else {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false)
        }, 2000);
      }

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
        setLoading(false);
        setEmail('');
        setPassword('');
        window.location.reload();
      }, 2000);
    }
  }

  return (
    <>
      {error && <p>Something happened...</p>}
      <Wrapper>
        {!error && (
          <>
            <Link to="/settings">
              <img src={Settings} alt="Not-Found" id="settingsIcon" />
            </Link>
            <h1>Login</h1>
            <input
              type='text'
              value={email}
              name='email'
              placeholder='Email'
              onChange={handleInput}
            />
            {emailError && <p>*Insert your email</p>}
            <input
              type='password'
              value={password}
              name='password'
              placeholder='Password'
              onChange={handleInput}
            />
            {passError && <p>*Insert your password</p>}
            <SubmitButton>
              <Button text='Next' callback={handleSubmit}  />
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
          </>
        )}
      </Wrapper>
    </>
  )
}

export default Login;
