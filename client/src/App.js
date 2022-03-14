import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import UserProvider from "./context";
// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <h1>Hola</h1>
          <Routes></Routes>
          <GlobalStyle />
        </UserProvider>
      </Router>
    </>
    
  );
}

export default App;
