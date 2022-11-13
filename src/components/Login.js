import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
//import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

export const Login = (props) => {
  const [empNo, setEmpNo] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const loginBodyData = {
        emp_no: empNo,
        password: password,
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginBodyData),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        console.log(json.authToken);
        window.location.reload();
        //navigate("/createNew");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.error("Error during Login !!!");
      console.error(error);
    }
  };
  return (
      <Container>
        <Row className="justify-content-md-center">
          <Col className="container-fluid" md="auto">
            <Card className="text-center">
              <Card.Header>Sign In to AM SoP Approval App</Card.Header>
              <Card.Body>
                <div className="container">
                  <form className="form-signin">
                    <div className="form-group row mt-2">
                      <label htmlFor="inputEmpNo" className="sr-only">
                        Employee Number
                      </label>
                      <input
                        type="text"
                        id="inputEmpNo"
                        className="form-control"
                        placeholder="Employee Number"
                        value={empNo}
                        onChange={(e) => {
                          setEmpNo(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="form-group row mt-2">
                      <label
                        htmlFor="inputPassword"
                        className="sr-only col-sm-8"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                      </label>
                    </div>
                    <button
                      className="btn btn-mg btn-secondary btn-block"
                      onClick={login}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default Login;
