import SopPortalContext from "./sopPortalContext";
import React, { useState, useEffect } from "react";

const SopPortalState = (props) => {
  const [sopPortalData, setSopPortalData] = useState([]);
    useEffect(() => {
      onLoad();
    }, []);
  
    async function onLoad() {
      try {
          const response = await fetch("/api/auth/getUser", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
          });
          const json = await response.json();
          setSopPortalData(json);
        }  
      catch (e) {
        console.log(e);
      }
    }

  return (
    <SopPortalContext.Provider value={{ sopPortalData, setSopPortalData }}>
      {props.children}
    </SopPortalContext.Provider>
  );
};

export default SopPortalState;
