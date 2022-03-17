import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Location from "./components/Location/Location";
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
            <Route path="/login" element={<Login />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/location" element={<Location />} />
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
