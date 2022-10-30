import React from "react";

const ViewCreatedItem = (props) => {
  const { sopPortalData } = props;
  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1">{sopPortalData.sopID}</div>
          <div className="col-sm-3">{sopPortalData.description}</div>
          <div className="col-sm-3">{sopPortalData.createdOn}</div>
        </div>
      </div>
  );
};

export default ViewCreatedItem;
