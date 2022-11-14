import React from "react";
import { useState } from "react";
import SendForm from "./SendForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const CreateNewform = (props) => {
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
      for (var i = 0; i < json.length; i++) {
        var obj = json[i];
        const data =
          obj["name"] +
          ", " +
          obj["post"] +
          ", " +
          obj["location"] +
          " (" +
          obj["emp_no"] +
          ")";
        temp.push(data);
      }
      setAllUserDetails(temp);
    } catch (e) {
      console.log(e);
    }

    if (savedStatus) {
      setModalShow(true);
    } else {
      console.log("Save form first");
    }
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
    <Container className="col d-flex justify-content-center">
      <Card border="secondary" style={{ width: "65rem" }}>
        <Card.Header as="h5" className="text-center">
          Create New SoP Approval Request
        </Card.Header>
        <Card.Body>
          <Form>
            <fieldset disabled>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Region
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    id="region"
                    placeholder={props.userDetails.location}
                    name="region"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Name of Substation
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    id="location"
                    placeholder={props.userDetails.region}
                    name="location"
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Brief Description
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  id="description"
                  name="description"
                  disabled={savedStatus ? "disabled" : ""}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Maintenance Date
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="date"
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
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Shutdown Start Date
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="date"
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
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Shutdown End Date
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="date"
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
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={4}>
                  Type of Shutdown
                </Form.Label>
                <Col sm={6}>
                  <Form.Check
                    label="OCC"
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
                  <Form.Check
                    type="radio"
                    label="Post OCC"
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
                  <Form.Check
                    type="radio"
                    label="Emergency"
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
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Reason of Shutdown
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  as="textarea"
                  id="shutdownReason"
                  rows={3}
                  name="shutdownReason"
                  disabled={savedStatus ? "disabled" : ""}
                  value={shutdownReason}
                  onChange={(e) => {
                    setShutdownReason(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label row sm={8}>
                  Details of Work to be carried out:
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  “Risks (Safety Risks/System Risk) Identified during the work”
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="risk"
                    rows={3}
                    name="risk"
                    disabled={savedStatus ? "disabled" : ""}
                    value={workRisk}
                    onChange={(e) => {
                      setWorkRisk(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Mitigation Measures planned for above Risks
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    id="mitigation"
                    rows={3}
                    name="mitigation"
                    disabled={savedStatus ? "disabled" : ""}
                    value={workRiskMitigation}
                    onChange={(e) => {
                      setWorkRiskMitigation(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Bays No/Bus/Element for Shutdown
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  id="shutdownElement"
                  name="shutdownElement"
                  disabled={savedStatus ? "disabled" : ""}
                  value={shutdownElement}
                  onChange={(e) => {
                    setShutdownElement(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={4}>
                  Premises
                </Form.Label>
                <Col sm={6}>
                  <Form.Check
                    label="POWERGRID Premises"
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
                  <Form.Check
                    label="Other Utility Premises"
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
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={4}>
                  Shutdown Work Scope
                </Form.Label>
                <Col sm={6}>
                  <Form.Check
                    label="Powergrid Scope"
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
                  <Form.Check
                    label="Other Utilities"
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
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={4}>
                  Ensure the following before availing shutdown
                </Form.Label>
                <Col sm={6}>
                  <Form.Check
                    label="PTW/SFT in SAP before start of work for approval from RTAMC"
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
                  <Form.Check
                    label="CHECKED PPE (Steel Rope, Clamps, PP Rope, helmets, safety belts etc.)"
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

                  <Form.Check
                    label="SAFETY PEP talk before start of work by Maintenance I/C"
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

                  <Form.Check
                    label="Ensure presence of minimum two POWERGRID personnel (with at
                  least one POWERGRID executive) during Manual operation of
                  switchgear assets locally at site with prior clearance from
                  RTAMC"
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
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Sequence of Isolation (CB & Isolator) By RTAMC
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="isolationSequence"
                    rows={3}
                    name="isolationSequence"
                    disabled={savedStatus ? "disabled" : ""}
                    value={isolationSequence}
                    onChange={(e) => {
                      setIsolationSequence(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Sequence for E/S Operation By site (Name of Earth Switch to be
                  closed)
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="esCloseOperationSequence"
                    rows={3}
                    name="esCloseOperationSequence"
                    disabled={savedStatus ? "disabled" : ""}
                    value={esCloseOperationSequence}
                    onChange={(e) => {
                      setESCloseOperationSequence(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Sequence of Restoration (CB & Isolator) By RTAMC
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="restorationSequence"
                    rows={3}
                    name="restorationSequence"
                    disabled={savedStatus ? "disabled" : ""}
                    value={restorationSequence}
                    onChange={(e) => {
                      setRestorationSequence(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Sequence for E/S Operation By site (Name of Earth Switch to be
                  opened)
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="esOpenOperationSequence"
                    rows={3}
                    name="esOpenOperationSequence"
                    disabled={savedStatus ? "disabled" : ""}
                    value={esOpenOperationSequence}
                    onChange={(e) => {
                      setESOpenOperationSequence(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label row sm={8}>
                  Details of Work to be carried out:
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  “Risks (Safety Risks/System Risk) Identified during the work”
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="risk"
                    rows={3}
                    name="risk"
                    disabled={savedStatus ? "disabled" : ""}
                    value={workRisk}
                    onChange={(e) => {
                      setWorkRisk(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Mitigation Measures planned for above Risks
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    id="mitigation"
                    rows={3}
                    name="mitigation"
                    disabled={savedStatus ? "disabled" : ""}
                    value={workRiskMitigation}
                    onChange={(e) => {
                      setWorkRiskMitigation(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={4}>
                  Presence of all following executive to be ensured during
                  shutdown/operation activity.
                </Form.Label>
                <Col sm={6}>
                  <Form.Check
                    label="Substation Maintenance In-charge"
                    type="checkbox"
                    id="presenceOfSubMainIncharge"
                    name="presenceOfEmp"
                    disabled={savedStatus ? "disabled" : ""}
                    value={presenceOfSubMainIncharge}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setPresenceOfSubMainIncharge(
                          "presenceOfSubMainIncharge"
                        );
                      } else {
                        setPresenceOfSubMainIncharge("");
                      }
                    }}
                    required
                  />
                  <Form.Check
                    label="Station In-charge"
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
                  <div>
                    Please mention alternative person (executive) in absence of
                    any one of above.
                  </div>
                  <Form.Control
                    as="textarea"
                    id="alternateEmp"
                    rows={2}
                    name="alternateEmp"
                    disabled={savedStatus ? "disabled" : ""}
                    value={alternateEmp}
                    onChange={(e) => {
                      setAlternateEmp(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Additional POWERGRID supervision
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="additionalSupervision"
                  name="additionalSupervision"
                  disabled={savedStatus ? "disabled" : ""}
                  value={additionalSupervision}
                  onChange={(e) => {
                    setAdditionalSupervision(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label row sm={8}>
                  Following checking to be ensured:
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  RTAMC
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="rtamc"
                    rows={3}
                    name="rtamcCheck"
                    disabled={savedStatus ? "disabled" : ""}
                    value={rtamcCheck}
                    onChange={(e) => {
                      setRtamcCheck(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Site
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as="textarea"
                    id="site"
                    rows={3}
                    name="siteCheck"
                    disabled={savedStatus ? "disabled" : ""}
                    value={siteCheck}
                    onChange={(e) => {
                      setSiteCheck(e.target.value);
                    }}
                    required
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Any Other Information (If any)
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  as="textarea"
                  id="otherInfo"
                  rows={3}
                  name="otherInfo"
                  disabled={savedStatus ? "disabled" : ""}
                  value={otherInfo}
                  onChange={(e) => {
                    setOtherInfo(e.target.value);
                  }}
                  required
                />
              </Col>
            </Form.Group>

            <Card.Footer className="text-center">
              <Form.Group as={Row} className="d-flex align-items-center justify-content-center">
                <Col sm={3}>
                  <Button variant="secondary" onClick={saveForm}>
                    Save
                  </Button>
                </Col>

                <Col sm={3}>
                  <Button variant="secondary" onClick={editForm}>
                    Edit
                  </Button>
                </Col>

                <Col sm={3}>
                  <Button variant="secondary" onClick={sendForm}>
                    Send
                  </Button>
                  <SendForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    userid={props.userDetails._id}
                    formid={id}
                    alluserdetails={allUserDetails}
                  />
                </Col>
              </Form.Group>
            </Card.Footer>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateNewform;
