import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
// API
import API from "../API";
// Components
import Button from "./Button";
// Styles
import { Wrapper, SubmitButton } from "./Register.styles";
// Images
import Back from "../assets/icons/RSVamos_ArrowBackIcon.svg";
import Camera from "../assets/icons/RSVamos_CameraIcon.svg";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirm') setConfirm(value);
  }

  const handleSubmit = async () => {
    try {

      if (name != '') {

        if (validator.isEmail(email)) {

          if (password != '') {

            if (password === confirm) {

              setLoading(true);

              const register = {
                user_name: name,
                user_email: email,
                user_password: password
              }

              const login = {
                user_email: email,
                user_password: password
              }

              API.postUser(register).then(() => {
                API.login(login);
              })

              setLoading(false);

              navigate("/");

            } else {
              setConfirmError(true);
              setTimeout(() => {
                setConfirmError(false)
              }, 2000);
            }

          } else {
            setPassError(true);
            setTimeout(() => {
              setPassError(false)
            }, 2000);
          }

        } else {
          setEmailError(true);
          setTimeout(() => {
            setEmailError(false)
          }, 2000);
        }

      } else {
        setNameError(true);
        setTimeout(() => {
          setNameError(false)
        }, 2000);
      }

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
        setLoading(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfirm('');
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
            <Link to="/login">
              <img src={Back} alt="Not-Found" id="backIcon" />
            </Link>
            <h1>Register</h1>
            <div className="inputRequired">
              <input
                type='text'
                value={name}
                name='name'
                placeholder='Username'
                onChange={handleInput}
              />
              <p>*</p>
            </div>
            {nameError && <p>*Insert a name</p>}
            <div className="inputRequired">
              <input
                type='email'
                value={email}
                name='email'
                placeholder='Email'
                onChange={handleInput}
              />
              <p>*</p>
            </div>
            {emailError && <p>*Insert a valid email</p>}
            <div className="inputRequired">
              <input
                type='password'
                value={password}
                name='password'
                placeholder='Password'
                onChange={handleInput}
              />
              <p>*</p>
            </div>
            {passError && <p>*Insert a password</p>}
            <div className="inputRequired">
              <input
                type='password'
                value={confirm}
                name='confirm'
                placeholder='Confirm Password'
                onChange={handleInput}
              />
              <p>*</p>
            </div>
            {confirmError && <p>*Password doesn't match</p>}
            <div className="imageUpload">
              <label for="fileInput">
                <img id="imageIcon" src={Camera} alt="Not-Found" />
              </label>
              <input id="fileInput" type="file" />
            </div>
            <SubmitButton>
              <Button text='Next' callback={handleSubmit} />
            </SubmitButton>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default Register;
