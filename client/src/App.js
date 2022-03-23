import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Homepage from "./Views/HomePage/Homepage";
import Location from "./Views/Location/Location";
import LocationStep2 from "./Views/Location/LocationStep2";
import LocationStep3 from "./Views/Location/LocationStep3";
import Map from "./Views/Location/LocationMap";
import LeaderBoard from "./Views/LeaderBoard/LeaderBoard";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import Settings from "./Views/Settings/Settings";
import Profile from "./Views/Profile/Profile";
import UpdateProfile from "./Views/UpdateProfile/UpdateProfile";
import Test from "./Views/Test";
// Context
import UserProvider from "./context";
// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/location" element={<Location />} />
            <Route path="/LocationStep2" element={<LocationStep2 />} />
            <Route path="/LocationStep3" element={<LocationStep3 />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <NavBar />
          <GlobalStyle />
        </UserProvider>
      </Router>
    </>

  );
}

export default App;
