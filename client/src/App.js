import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Homepage from "./Views/HomePage/Homepage";
import Location from "./Views/Location/Location";
import LeaderBoard from "./Views/LeaderBoard/LeaderBoard";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import Settings from "./Views/Settings/Settings";
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
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <NavBar />
          <GlobalStyle />
        </UserProvider>
      </Router>
    </>

  );
}

export default App;
