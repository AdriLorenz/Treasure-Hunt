import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import bcrypt from "bcryptjs";
// API
import API from "../../API";
// Hooks
import { useUserFetch } from "../../hooks/useUserFetch";
// Styles
import { Wrapper, Image, EditName, Content, SaveButton, LogoutButton, DeleteButton } from "./UpdateProfile.styles";
// Images
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg";
import Blank from "../../assets/icons/blank_image.png";
import Camera from "../../assets/icons/RSVamos_CameraIcon.svg";
import Rewrite from "../../assets/icons/RSVamos_RewriteIcon.svg";

const UpdateProfile = () => {
  const { state: user } = useUserFetch(localStorage.userEmail);

  const [userName, setUserName] = useState('');
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [image, setImage] = useState('');

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [empty, setEmpty] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [editName, setEditName] = useState(false);

  const navigate = useNavigate();

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'userName') setUserName(value);
    if (name === 'oldPassword') setOldPass(value);
    if (name === 'newPassword') setNewPass(value);
    if (name === 'oldEmail') setOldEmail(value);
    if (name === 'newEmail') setNewEmail(value);

  }

  const handleSave = async () => {
    if (newEmail === '' && newPass === '' && (userName === '' || userName === user.user_name)) {
      setEmpty(true);
      setTimeout(() => {
        setEmpty(false)
      }, 2000);

    } else {
      const formData = new FormData();

      if (newEmail != '') {
        if (newEmail === user.user_email || !validator.isEmail(newEmail)) {
          setEmailError(true);
          setTimeout(() => {
            setEmailError(false)
          }, 2000);
  
        } else {
          formData.append("user_email", newEmail);

        }
      }

      if (newPass != '') {
        if (bcrypt.compareSync(oldPass, user.user_password)) {
          if (newPass != oldPass) {
            formData.append("user_password", newPass);

          }
        }
      }

      if (userName != '' && userName != user.user_name) {
        formData.append("user_name", userName);
      }

      try {
        setLoading(true);

        await API.updateUser(user.user_id, formData);

        setLoading(false);

        navigate("/profile");

      } catch (error) {
        setError(true);
        setTimeout(() => {
          setError(false)
        }, 2000);
      }
      
    }

  }

  const handleName = async () => {
    if (editName == false) {
      setUserName(user.user_name);
      setEditName(true);

    } else {
      setEditName(false);

    }
  }

  const handleImage = async (e) => {
    try {

      setLoading(true);

      const formData = new FormData();
      formData.append("fileName", e.currentTarget.files[0]);

      await API.updateUser(user.user_id, formData);
      localStorage.removeItem("userEmail");

      setLoading(false);

      window.location.reload();

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
  }

  const handleLogout = async () => {
    try {

      setLoading(true);

      localStorage.removeItem("userEmail");

      setLoading(false);

      navigate("/");

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
  }

  const handleDelete = async () => {
    try {
      
      setLoading(true);

      await API.deleteUser(user.user_id);

      setLoading(false);

      navigate("/");

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
  }

  useEffect(() => {

    const changeImage = () => {
      if (user != null) {
        setImage('http://localhost:5000/' + user.user_img_path);
      }
    }
    changeImage();
  }, [user]);

  return (
    <>
      {error && <p>Something went wrong...</p>}
      <Wrapper>
        {!error && (
          <>
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
            {user && (
              <>
                <Image>
                  <img
                    src={image != "http://localhost:5000/"
                      ? image
                      : Blank}
                    alt="Not-Found"
                    id="profileImage"
                  />
                  <div className="imageUpload">
                    <label for="fileInput">
                      <img id="cameraIcon" src={Camera} alt="Not-Found" />
                    </label>
                    <input id="fileInput" type="file" onChange={handleImage} />
                  </div>
                </Image>
                {editName ? (
                  <EditName>
                    <input
                      type="text"
                      id="nameInput"
                      name="userName"
                      value={userName}
                      onChange={handleInput}
                    />
                    <img src={Rewrite} alt="Not-Found" id="rewriteIcon" onClick={handleName} />
                  </EditName>
                ) : (
                  <>
                    {userName == '' ? (
                      <EditName>
                        <h1>{user.user_name}</h1>
                        <img src={Rewrite} alt="Not-Found" id="rewriteIcon" onClick={handleName} />
                      </EditName>
                    ) : (
                      <EditName>
                        <h1>{userName}</h1>
                        <img src={Rewrite} alt="Not-Found" id="rewriteIcon" onClick={handleName} />
                      </EditName>
                    )}
                  </>
                )}
                <h2>Score: {user.user_score}</h2>
                <SaveButton type="button" onClick={handleSave}>Save profile</SaveButton>
                {empty && <p>Nothing to change</p>}
                <Content>
                  <h1>Change password</h1>
                  <input
                    type="password"
                    name="oldPassword"
                    placeholder="Old password"
                    onChange={handleInput}
                  />
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New password"
                    onChange={handleInput}
                  />
                  <br />
                  <h1>Change email</h1>
                  <input
                    type="text"
                    name="oldEmail"
                    value={user.user_email}
                    placeholder="Old email"
                    onChange={handleInput}
                  />
                  <input
                    type="text"
                    name="newEmail"
                    placeholder="New email"
                    onChange={handleInput}
                  />
                  {emailError && <p>Invalid email</p>}
                  <br />
                  <div className="bottomButtons">
                    <LogoutButton type="button" onClick={handleLogout}>Logout</LogoutButton>
                    <DeleteButton type="button" onClick={handleDelete}>Delete account</DeleteButton>
                  </div>
                </Content>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  )
}

export default UpdateProfile;
