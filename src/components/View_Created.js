import React, { useEffect, useState } from "react";
//import SopPortalContext from "../context/sopPortalContext";
//import ViewCreatedItem from "./ViewCreatedItem";

export const ViewCreated = () => {
  //const context = useContext(SopPortalContext);
  const [sopPortalData, setSopPortalData] = useState([]);
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const response = await fetch("/api/sop/fetchSoPData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setSopPortalData(json);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="container position-absolute">
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {sopPortalData.map((sopPortalData, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{sopPortalData.description}</td>
                <td>{sopPortalData.createdOn}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCreated;
