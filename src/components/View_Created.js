import React, { useContext } from "react";
import SopPortalContext from "../context/sopPortalContext";
import ViewCreatedItem from "./ViewCreatedItem";

export const ViewCreated = () => {
  const context = useContext(SopPortalContext);
  const { sopPortalData, setSopPortalData } = context;
  return (
    <div className="container position-relative">
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
