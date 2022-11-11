import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import SearchBarDropdown from "./SearchBarDropdown";
import { useState } from "react";

function SendForm(props) {

  const [userDetails, setUserDetails] = useState([]);
  const onInputChange = (event) => {
    setUserDetails(
      props.alluserdetails.filter((userdetail) =>
        userdetail.includes(event.target.value)
      )
    );
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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Remarks"
                style={{ height: "100px" }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendForm;
