import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import SearchBarDropdown from "./SearchBarDropdown";
import { useState } from "react";

function SendForm(props) {
  const [userDetails, setUserDetails] = useState([]);
  const [sendToUserDetails, setSendToUserDetails] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [remarks, setRemarks] = useState("");

  const onInputChange = (e) => {
    setUserDetails(
      props.alluserdetails.filter((userdetail) =>
        userdetail.includes(e.target.value)
      )
    );
  };

  const submitForm = async (e) => {
    try {
      const emp_no = sendToUserDetails.split("(")[1].split(")")[0];
      const bodyData = {
        emp_no: emp_no,
      };

      const response = await fetch("/api/auth/getUserId", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(bodyData),
      });
      const json = await response.json();
      setSendTo(json[0]["_id"]);

      // Update sent details in form 
      const bodyDataSend = {
        remarks: remarks,
        sentTo: json[0]["_id"],
      };
      const responseSend = await fetch(`/api/sop/sendSop/${props.formid}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(bodyDataSend),
      });
      const jsonSend = await responseSend.json();
      console.log(jsonSend);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Send Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="selectUser">
              <Form.Label>Send To</Form.Label>
              <SearchBarDropdown
                options={userDetails}
                onInputChange={onInputChange}
                setSendToUserDetails={setSendToUserDetails}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Remarks"
                style={{ height: "100px" }}
                value={remarks}
                onChange={(e) => {
                  setRemarks(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={submitForm}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendForm;
