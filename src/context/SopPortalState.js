import SopPortalContext from "./sopPortalContext";
import React, { useState } from "react";

const SopPortalState = (props) => {
  const initialSopPortalData = [
    {
      shutdown: {
        startDate: "2022-11-01T00:00:00.000Z",
        endDate: "2022-11-03T00:00:00.000Z",
        reason: "for some work",
      },
      shutdownType: {
        occ: true,
        postOcc: false,
        emergency: false,
      },
      workDetails: {
        risks: "there are risk",
        mitigation: "where is mitigation plan",
      },
      premises: {
        powergrid: true,
        other: false,
      },
      shutdownWorkScope: {
        powergrid: true,
        other: false,
      },
      shutdownRequisite: {
        ptw: true,
        ppe: true,
        pep: true,
        presence: true,
      },
      presenceOfEmp: {
        maintenanceHead: true,
        stationInCharge: true,
      },
      _id: "635abc1c32812284994be806",
      user: "6358c0387d9a5e3ef1ef29d5",
      location: "dehgam",
      region: "wr-ii",
      description: "sop for shutdown from dehgam",
      maintenanceDate: "2022-11-02T00:00:00.000Z",
      shutdownElement: "transformer",
      isolationSequence: "to be provided by site",
      esCloseOperationSequence: "to be provided by rtamc",
      restorationSequence: "to be provided by am",
      esOpenOperationSequence: "to be provided by ntamc",
      additionalSupervision: "not required",
      rtamcCheck: "done by rtamc",
      siteCheck: "done by site",
      remarks: "do properly",
      otherInfo: "status may be updated",
      createdOn: "2022-10-27T17:13:00.036Z",
      sentDetails: [],
      date: "2022-10-27T17:13:00.036Z",
      sopID: 2000,
      __v: 0,
    },
    {
      shutdown: {
        startDate: "2022-11-01T00:00:00.000Z",
        endDate: "2022-11-03T00:00:00.000Z",
        reason: "for some work",
      },
      shutdownType: {
        occ: true,
        postOcc: false,
        emergency: false,
      },
      workDetails: {
        risks: "there are risk",
        mitigation: "where is mitigation plan",
      },
      premises: {
        powergrid: true,
        other: false,
      },
      shutdownWorkScope: {
        powergrid: true,
        other: false,
      },
      shutdownRequisite: {
        ptw: true,
        ppe: true,
        pep: true,
        presence: true,
      },
      presenceOfEmp: {
        maintenanceHead: true,
        stationInCharge: true,
      },
      _id: "635abd8e976e8d2ceea97691",
      user: "6358c0387d9a5e3ef1ef29d5",
      location: "dehgam",
      region: "wr-ii",
      description: "sop for shutdown from rewa",
      maintenanceDate: "2022-11-02T00:00:00.000Z",
      shutdownElement: "transformer",
      isolationSequence: "to be provided by site",
      esCloseOperationSequence: "to be provided by rtamc",
      restorationSequence: "to be provided by am",
      esOpenOperationSequence: "to be provided by ntamc",
      additionalSupervision: "not required",
      rtamcCheck: "done by rtamc",
      siteCheck: "done by site",
      remarks: "do properly",
      otherInfo: "status may be updated",
      createdOn: "2022-10-27T17:19:10.745Z",
      sentDetails: [],
      date: "2022-10-27T17:19:10.745Z",
      sopID: 2900,
      __v: 0,
    },
  ];

  const [sopPortalData, setSopPortalData] = useState(initialSopPortalData);

  return (
    <SopPortalContext.Provider value={{ sopPortalData, setSopPortalData }}>
      {props.children}
    </SopPortalContext.Provider>
  );
};

export default SopPortalState;
