import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [empty, setEmpty] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'oldPassword') setOldPass(value);
    if (name === 'newPassword') setNewPass(value);
    if (name === 'oldEmail') setOldEmail(value);
    if (name === 'newEmail') setNewEmail(value);
  
  }

  const handleSave = async () => {}

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
    
  }

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
      {user && (
        <>
          <Image>
            <img
              src={user.user_img_path != ""
                ? 'http://localhost:5000/' + user.user_img_path
                : Blank}
              alt="Not-Found"
              id="profileImage"
            />
            <div className="imageUpload">
              <label for="fileInput">
                <img id="cameraIcon" src={Camera} alt="Not-Found" />
              </label>
              <input id="fileInput" type="file" />
            </div>
          </Image>
          <EditName>
            <h1>{user.user_name}</h1>
            <img src={Rewrite} alt="Not-Found" id="rewriteIcon" />
          </EditName>
          <h2>Score: {user.user_score}</h2>
          <SaveButton type="button" onClick={false}>Save profile</SaveButton>
          <Content>
            <h1>Change password</h1>
            <input
              name="oldPassword"
              placeholder="Old password"
            />
            <input
              name="newPassword"
              placeholder="New password"
            />
            <br/>
            <h1>Change email</h1>
            <input
              name="oldEmail"
              value={user.user_email}
              placeholder="Old email"
            />
            <input
              name="newEmail"
              placeholder="New email"
            />
            <br/>
            <div className="bottomButtons">
              <LogoutButton type="button" onClick={handleLogout}>Logout</LogoutButton>
              <DeleteButton type="button" onClick={handleDelete}>Delete account</DeleteButton>
            </div>
          </Content>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </>
      )}
    </Wrapper>
  )
}

export default UpdateProfile;
