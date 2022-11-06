import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [empNo, setEmpNo] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

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
      if (json.success){
          localStorage.setItem('token', json.authToken);
          navigate("/createNew");
      }else{
        props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.error("Error during Login !!!");
      console.error(error);
    }
  };
  return (
    <div className="container" position="relative">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal" align="center">
          Sign In
        </h1>
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
          <label htmlFor="inputPassword" className="sr-only col-sm-8">
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
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-mg btn-secondary btn-block" onClick={login}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
