import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateNew from "./components/Create_New";
import ViewCreated from "./components/View_Created";
import Sent from "./components/Sent";
import SopPortalState from "./context/SopPortalState";
import Login from "./components/Login";
import Alert from "./components/Alert";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import { useEffect } from "react";

import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      if (localStorage.getItem("token")) userHasAuthenticated(true);
      else userHasAuthenticated(false);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
