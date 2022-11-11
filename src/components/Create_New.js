import React from "react";
import { useState } from "react";
import SendForm from "./SendForm";

export const CreateNew = (props) => {
  const [savedStatus, setSavedStatus] = useState(false);
  const [toUpdate, setToUpdate] = useState(false);
  const [id, setId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [allUserDetails, setAllUserDetails] = useState([]);
  //console.log(props.userDetails);
  const saveForm = async (e) => {
    e.preventDefault();
    try {
      const bodyData = {
        description: description,
        maintenanceDate: maintenanceDate,
        shutdown: {
          startDate: shutdownStartDate,
          endDate: shutdownEndDate,
          reason: shutdownReason,
        },
        shutdownType: {
          occ: shutdownTypeOCC,
          postOcc: shutdownTypePostOCC,
          emergency: shutdownTypeEmergency,
        },
        workDetails: {
          risks: workRisk,
          mitigation: workRiskMitigation,
        },
        shutdownElement: shutdownElement,
        premises: {
          powergrid: powergridPremises,
          other: otherPremises,
        },
        shutdownWorkScope: {
          powergrid: powergridScope,
          other: otherScope,
        },
        shutdownRequisite: {
          ptw: shutdownRequisitePTWinSAP,
          ppe: shutdownRequisitePPE,
          pep: safetyPEP,
          presence: presenceEmp,
        },
        isolationSequence: isolationSequence,
        esCloseOperationSequence: esCloseOperationSequence,
        restorationSequence: restorationSequence,
        esOpenOperationSequence: esOpenOperationSequence,
        presenceOfEmp: {
          maintenanceHead: presenceOfSubMainIncharge,
          stationInCharge: presenceOfSubIncharge,
          alternate: alternateEmp,
        },
        additionalSupervision: additionalSupervision,
        rtamcCheck: rtamcCheck,
        siteCheck: siteCheck,
        remarks: remarks,
        otherInfo: otherInfo,
      };

      //console.log(JSON.stringify(bodyData));
      if (!toUpdate) {
        const response = await fetch("/api/sop/addSoPData/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(bodyData),
        });
        const json = await response.json();
        setId(json._id);
        setToUpdate(true);
      } else {
        const response = await fetch(`/api/sop/updateSop/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(bodyData),
        });
        const json = await response.json();
      }
      setSavedStatus(true);
      //console.log(json);
    } catch (error) {
      console.error("Error during saving form!!!");
      console.error(error);
    }
  };


  const editForm = (e) => {
    e.preventDefault();
    setSavedStatus(false);
  };


  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/getAllUsers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const json = await response.json();
      
      const temp = [];
      for (var i = 0; i < json.length; i++){
        var obj = json[i];
        const data = obj["name"] + ", " + obj["post"] + ", " + obj["location"] + " (" + obj["emp_no"] +")"
        temp.push(data);
      }
      setAllUserDetails(temp);
    } catch (e) {
      console.log(e);
    }
    
   // if (savedStatus) {
      setModalShow(true);
    //} else {
      //console.log("Save form first");
    //}
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const [description, setDescription] = useState("");
  const [maintenanceDate, setMaintenanceDate] = useState("");
  const [shutdownStartDate, setShutdownStartDate] = useState("");
  const [shutdownEndDate, setShutdownEndDate] = useState("");
  const [shutdownTypeOCC, setShutdownTypeOCC] = useState("");
  const [shutdownTypePostOCC, setShutdownTypePostOCC] = useState("");
  const [shutdownTypeEmergency, setShutdownTypeEmergency] = useState("");
  const [shutdownReason, setShutdownReason] = useState("");
  const [workRisk, setWorkRisk] = useState("");
  const [workRiskMitigation, setWorkRiskMitigation] = useState("");
  const [shutdownElement, setShutdownElement] = useState("");
  const [powergridPremises, setPowergridPremises] = useState("");
  const [otherPremises, setOtherPremises] = useState("");
  const [powergridScope, setPowergridScope] = useState("");
  const [otherScope, setOtherScope] = useState("");
  const [shutdownRequisitePTWinSAP, setShutdownRequisitePTWinSAP] = useState(
    ""
  );
  const [shutdownRequisitePPE, setShutdownRequisitePPE] = useState("");
  const [safetyPEP, setSafetyPEP] = useState("");
  const [presenceEmp, setPresenceEmp] = useState("");
  const [isolationSequence, setIsolationSequence] = useState("");
  const [esCloseOperationSequence, setESCloseOperationSequence] = useState("");
  const [restorationSequence, setRestorationSequence] = useState("");
  const [esOpenOperationSequence, setESOpenOperationSequence] = useState("");
  const [presenceOfSubMainIncharge, setPresenceOfSubMainIncharge] = useState(
    ""
  );
  const [presenceOfSubIncharge, setPresenceOfSubIncharge] = useState("");
  const [alternateEmp, setAlternateEmp] = useState("");
  const [additionalSupervision, setAdditionalSupervision] = useState("");
  const [rtamcCheck, setRtamcCheck] = useState("");
  const [siteCheck, setSiteCheck] = useState("");
  const [remarks, setRemarks] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  return (
    <div className="container w-100 position-absolute top-0 start-0 pt-5 mt-3">
      <form>
        <fieldset disabled>
          <div className="form-group row mt-2">
            <label htmlFor="region" className="col-sm-4 col-form-label">
              Region
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                id="region"
                className="form-control"
                placeholder={props.userDetails.location}
                name="region"
              />
            </div>
          </div>

          <div className="form-group row mt-2">
            <label htmlFor="location" className="col-sm-4 col-form-label">
              Name of Substation
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                id="location"
                className="form-control"
                placeholder={props.userDetails.region}
                name="location"
              />
            </div>
          </div>
        </fieldset>

        <div className="form-group row mt-2">
          <label htmlFor="description" className="col-sm-4 col-form-label">
            Brief Description
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              disabled={savedStatus ? "disabled" : ""}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label htmlFor="maintenanceDate" className="col-sm-4 col-form-label">
            Maintenance Date
          </label>
          <div className="col-sm-5">
            <input
              type="date"
              className="form-control"
              id="maintenanceDate"
              name="maintenanceDate"
              disabled={savedStatus ? "disabled" : ""}
              value={maintenanceDate}
              onChange={(e) => {
                setMaintenanceDate(e.target.value);
              }}
              min={disablePastDate()}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label
            htmlFor="shutdownStartDate"
            className="col-sm-4 col-form-label"
          >
            Shutdown Start Date
          </label>
          <div className="col-sm-5">
            <input
              type="date"
              className="form-control"
              id="shutdownStartDate"
              name="shutdownStartDate"
              disabled={savedStatus ? "disabled" : ""}
              value={shutdownStartDate}
              onChange={(e) => {
                setShutdownStartDate(e.target.value);
              }}
              min={disablePastDate()}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label htmlFor="shutdownEndDate" className="col-sm-4 col-form-label">
            Shutdown End Date
          </label>
          <div className="col-sm-5">
            <input
              type="date"
              className="form-control"
              id="shutdownEndDate"
              name="shutdownEndDate"
              disabled={savedStatus ? "disabled" : ""}
              value={shutdownEndDate}
              onChange={(e) => {
                setShutdownEndDate(e.target.value);
              }}
              min={disablePastDate()}
              required
            />
          </div>
        </div>

        <fieldset>
          <div className="form-group row mt-2">
            <legend className="col-form-label col-sm-4 pt-0">
              Type of Shutdown
            </legend>
            <div className="col-sm-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shutdownType"
                  id="occ"
                  disabled={savedStatus ? "disabled" : ""}
                  value={shutdownTypeOCC}
                  onClick={(e) => {
                    setShutdownTypeOCC("occ");
                    setShutdownTypePostOCC("");
                    setShutdownTypeEmergency("");
                  }}
                  required
                />
                <label className="form-check-label" htmlFor="occ">
                  OCC
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shutdownType"
                  id="postOCC"
                  value={shutdownTypePostOCC}
                  onChange={(e) => {
                    setShutdownTypePostOCC("postOCC");
                    setShutdownTypeOCC("");
                    setShutdownTypeEmergency("");
                  }}
                  disabled={savedStatus ? "disabled" : ""}
                  required
                />
                <label className="form-check-label" htmlFor="postOCC">
                  Post OCC
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shutdownType"
                  id="emergency"
                  value={shutdownTypeEmergency}
                  onChange={(e) => {
                    setShutdownTypeEmergency("emergency");
                    setShutdownTypePostOCC("");
                    setShutdownTypeOCC("");
                  }}
                  disabled={savedStatus ? "disabled" : ""}
                  required
                />
                <label className="form-check-label" htmlFor="emergency">
                  Emergency
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group row mt-2">
          <label htmlFor="shutdownReason" className="col-sm-4 col-form-label">
            Reason of Shutdown
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="shutdownReason"
              rows="3"
              name="shutdownReason"
              disabled={savedStatus ? "disabled" : ""}
              value={shutdownReason}
              onChange={(e) => {
                setShutdownReason(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <fieldset>
          <div className="form-group row mt-2">
            <label className="col-sm-9 col-form-label">
              Details of Work to be carried out:
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="risk" className="col-sm-4 col-form-label">
              “Risks (Safety Risks/System Risk) Identified during the work”
            </label>
            <div className="col-sm-5">
              <textarea
                type="text"
                className="form-control"
                id="risk"
                rows="2"
                name="risk"
                disabled={savedStatus ? "disabled" : ""}
                value={workRisk}
                onChange={(e) => {
                  setWorkRisk(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="form-group row mt-2">
            <label htmlFor="mitigation" className="col-sm-4 col-form-label">
              Mitigation Measures planned for above Risks.
            </label>
            <div className="col-sm-5">
              <textarea
                type="text"
                className="form-control"
                id="mitigation"
                rows="2"
                name="mitigation"
                disabled={savedStatus ? "disabled" : ""}
                value={workRiskMitigation}
                onChange={(e) => {
                  setWorkRiskMitigation(e.target.value);
                }}
                required
              />
            </div>
          </div>
        </fieldset>

        <div className="form-group row mt-2">
          <label htmlFor="shutdownElement" className="col-sm-4 col-form-label">
            Bays No./Bus/Element for Shutdown
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="shutdownElement"
              name="shutdownElement"
              disabled={savedStatus ? "disabled" : ""}
              value={shutdownElement}
              onChange={(e) => {
                setShutdownElement(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <fieldset>
          <div className="form-group row mt-2">
            <legend className="col-form-label col-sm-4 pt-0">Premises</legend>
            <div className="col-sm-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="premises"
                  id="powergridPremises"
                  disabled={savedStatus ? "disabled" : ""}
                  value={powergridPremises}
                  onChange={(e) => {
                    setPowergridPremises("powergridPremises");
                    setOtherPremises("");
                  }}
                  required
                />
                <label className="form-check-label" htmlFor="powergridPremises">
                  Shutdown in POWERGRID Premises
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="premises"
                  id="otherPremises"
                  value={otherPremises}
                  onChange={(e) => {
                    setOtherPremises("otherPremises");
                    setPowergridPremises("");
                  }}
                  disabled={savedStatus ? "disabled" : ""}
                  required
                />
                <label className="form-check-label" htmlFor="otherPremises">
                  Shutdown in other utility Premises
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group row mt-2">
            <legend className="col-form-label col-sm-4 pt-0">
              Shutdown Work Scope
            </legend>
            <div className="col-sm-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shutdownScope"
                  id="powergridScope"
                  value={powergridScope}
                  onChange={(e) => {
                    setPowergridScope("powergridScope");
                    setOtherScope("");
                  }}
                  disabled={savedStatus ? "disabled" : ""}
                  required
                />
                <label className="form-check-label" htmlFor="powergridScope">
                  By POWERGRID
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shutdownScope"
                  id="otherScope"
                  value={otherScope}
                  onChange={(e) => {
                    setOtherScope("otherScope");
                    setPowergridScope("");
                  }}
                  disabled={savedStatus ? "disabled" : ""}
                  required
                />
                <label className="form-check-label" htmlFor="otherScope">
                  By Other Utilities
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group row mt-2">
            <div className="col-sm-4">
              Ensure the following before availing shutdown
            </div>
            <div className="col-sm-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="PTWinSAP"
                  name="shutdownRequisite"
                  disabled={savedStatus ? "disabled" : ""}
                  value={shutdownRequisitePTWinSAP}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setShutdownRequisitePTWinSAP("PTWinSAP");
                    } else {
                      setShutdownRequisitePTWinSAP("");
                    }
                  }}
                  required
                />
                <label className="form-check-label" htmlFor="PTWinSAP">
                  PTW/SFT in SAP before start of work for approval from RTAMC
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ppe"
                  name="shutdownRequisite"
                  disabled={savedStatus ? "disabled" : ""}
                  value={shutdownRequisitePPE}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setShutdownRequisitePPE("ppe");
                    } else {
                      setShutdownRequisitePPE("");
                    }
                  }}
                  required
                />
                <label className="form-check-label" htmlFor="ppe">
                  CHECKED PPE (Steel Rope, Clamps, PP Rope, helmets, safety
                  belts etc.)
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="SafetyPEP"
                  name="shutdownRequisite"
                  disabled={savedStatus ? "disabled" : ""}
                  value={safetyPEP}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setSafetyPEP("SafetyPEP");
                    } else {
                      setSafetyPEP("");
                    }
                  }}
                  required
                />
                <label className="form-check-label" htmlFor="SafetyPEP">
                  SAFETY PEP talk before start of work by Maintenance I/C
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="presenceEmp"
                  name="shutdownRequisite"
                  disabled={savedStatus ? "disabled" : ""}
                  value={presenceEmp}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setPresenceEmp("presenceEmp");
                    } else {
                      setPresenceEmp("");
                    }
                  }}
                  required
                />
                <label className="form-check-label" htmlFor="presenceEmp">
                  Ensure presence of minimum two POWERGRID personnel (with at
                  least one POWERGRID executive) during Manual operation of
                  switchgear assets locally at site with prior clearance from
                  RTAMC
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group row mt-2">
          <label
            htmlFor="isolationSequence"
            className="col-sm-4 col-form-label"
          >
            Sequence of Isolation (CB & Isolator) By RTAMC
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="isolationSequence"
              rows="2"
              name="isolationSequence"
              disabled={savedStatus ? "disabled" : ""}
              value={isolationSequence}
              onChange={(e) => {
                setIsolationSequence(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label
            htmlFor="esCloseOperationSequence"
            className="col-sm-4 col-form-label"
          >
            Sequence for E/S Operation By site (Name of Earth Switch to be
            closed)
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="esCloseOperationSequence"
              rows="2"
              name="esCloseOperationSequence"
              disabled={savedStatus ? "disabled" : ""}
              value={esCloseOperationSequence}
              onChange={(e) => {
                setESCloseOperationSequence(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label
            htmlFor="restorationSequence"
            className="col-sm-4 col-form-label"
          >
            Sequence of Restoration (CB & Isolator) By RTAMC
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="restorationSequence"
              rows="2"
              name="restorationSequence"
              disabled={savedStatus ? "disabled" : ""}
              value={restorationSequence}
              onChange={(e) => {
                setRestorationSequence(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label
            htmlFor="esOpenOperationSequence"
            className="col-sm-4 col-form-label"
          >
            Sequence for E/S Operation By site (Name of Earth Switch to be
            opened)
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="esOpenOperationSequence"
              rows="2"
              name="esOpenOperationSequence"
              disabled={savedStatus ? "disabled" : ""}
              value={esOpenOperationSequence}
              onChange={(e) => {
                setESOpenOperationSequence(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <fieldset>
          <div className="form-group row mt-2">
            <div className="col-sm-4">
              Presence of all following executive to be ensured during
              shutdown/operation activity.
            </div>
            <div className="col-sm-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="presenceOfSubMainIncharge"
                  name="presenceOfEmp"
                  disabled={savedStatus ? "disabled" : ""}
                  value={presenceOfSubMainIncharge}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setPresenceOfSubMainIncharge("presenceOfSubMainIncharge");
                    } else {
                      setPresenceOfSubMainIncharge("");
                    }
                  }}
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="presenceOfSubMainIncharge"
                >
                  Substation Maintenance In-charge
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="presenceOfSubIncharge"
                  name="presenceOfEmp"
                  disabled={savedStatus ? "disabled" : ""}
                  value={presenceOfSubIncharge}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setPresenceOfSubIncharge("presenceOfSubIncharge");
                    } else {
                      setPresenceOfSubIncharge("");
                    }
                  }}
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="presenceOfSubIncharge"
                >
                  Station In-charge
                </label>
              </div>
              <div className="col-sm">
                <label className="form-check-label" htmlFor="alternateEmp">
                  Please mention alternative person (executive) in absence of
                  any one of above.
                </label>
                <div className="col-sm">
                  <textarea
                    type="text"
                    className="form-control"
                    id="alternateEmp"
                    rows="2"
                    name="alternateEmp"
                    disabled={savedStatus ? "disabled" : ""}
                    value={alternateEmp}
                    onChange={(e) => {
                      setAlternateEmp(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-group row mt-2">
          <label
            htmlFor="additionalSupervision"
            className="col-sm-4 col-form-label"
          >
            Additional POWERGRID supervision
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="additionalSupervision"
              rows="2"
              name="additionalSupervision"
              disabled={savedStatus ? "disabled" : ""}
              value={additionalSupervision}
              onChange={(e) => {
                setAdditionalSupervision(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <fieldset>
          <div className="form-group row mt-2">
            <label className="col-sm-9 col-form-label">
              Following checking to be ensured:
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="rtamcCheck" className="col-sm-4 col-form-label">
              RTAMC
            </label>
            <div className="col-sm-5">
              <textarea
                type="text"
                className="form-control"
                id="rtamcCheck"
                rows="4"
                name="rtamcCheck"
                disabled={savedStatus ? "disabled" : ""}
                value={rtamcCheck}
                onChange={(e) => {
                  setRtamcCheck(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="form-group row mt-2">
            <label htmlFor="siteCheck" className="col-sm-4 col-form-label">
              Site
            </label>
            <div className="col-sm-5">
              <textarea
                type="text"
                className="form-control"
                id="siteCheck"
                rows="4"
                name="siteCheck"
                disabled={savedStatus ? "disabled" : ""}
                value={siteCheck}
                onChange={(e) => {
                  setSiteCheck(e.target.value);
                }}
                required
              />
            </div>
          </div>
        </fieldset>

        <div className="form-group row mt-2">
          <label htmlFor="remarks" className="col-sm-4 col-form-label">
            Remarks
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="remarks"
              rows="4"
              name="remarks"
              disabled={savedStatus ? "disabled" : ""}
              value={remarks}
              onChange={(e) => {
                setRemarks(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <label htmlFor="otherInfo" className="col-sm-4 col-form-label">
            Any Other Information (If any)
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              id="otherInfo"
              rows="4"
              name="otherInfo"
              disabled={savedStatus ? "disabled" : ""}
              value={otherInfo}
              onChange={(e) => {
                setOtherInfo(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row mt-5">
          <div className="col-sm-3" align="center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={saveForm}
            >
              Save
            </button>
          </div>
          <div className="col-sm-3" align="center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={editForm}
            >
              Edit
            </button>
          </div>
          <div className="col-sm-3" align="center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={sendForm}
            >
              Send
            </button>
            <SendForm
              show={modalShow}
              onHide={() => setModalShow(false)}
              userid={props.userDetails._id}
              formid={id}
              alluserdetails={allUserDetails}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNew;
