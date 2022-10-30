import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateNew from "./components/Create_New";
import ViewCreated from "./components/View_Created";
import Sent from "./components/Sent";
import SopPortalState from "./context/SopPortalState";

function App() {
  return (
    <>
    <SopPortalState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createNew" element={<CreateNew />} />
          <Route path="/viewCreated" element={<ViewCreated />} />
          <Route path="/sent" element={<Sent />} />
        </Routes>
      </Router>
      </SopPortalState>
    </>
  );
}

export default App;
