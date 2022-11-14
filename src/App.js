import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateNewform from "./components/CreateNewform";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import SopPortalState from "./context/SopPortalState";
import Login from "./components/Login";
import Alert from "./components/Alert";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import { useState, useEffect } from "react";

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
  const [userDetails, setUserDetails] = useState({});
  
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      if (localStorage.getItem("token")) {
        console.log("authenticated user");
        const response = await fetch("/api/auth/getUser", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });
        const json = await response.json();
        setUserDetails(json);
        userHasAuthenticated(true);
      } else {
        console.log("unauthenticated user");
        userHasAuthenticated(false);
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div>
      <Router>
        <SopPortalState>
          <Alert alert={alert} />
          {isAuthenticated ? <Navbar /> : <></>}
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element=<CreateNewform userDetails= {userDetails} /> />
                <Route path="/login" element=<CreateNewform userDetails= {userDetails}/> />
                <Route path="/createNew" element=<CreateNewform userDetails= {userDetails}/> />
                <Route path="/inbox" element=<Inbox /> />
                <Route path="/sent" element=<Sent /> />
              </>
            ) : (
              <>
                <Route path={window.location.pathname} element=<Login /> />
              </>
            )}
          </Routes>
        </SopPortalState>
      </Router>
    </div>
  );
}

export default App;
