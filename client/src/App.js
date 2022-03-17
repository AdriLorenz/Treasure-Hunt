import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Location from "./components/Location/Location";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
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
