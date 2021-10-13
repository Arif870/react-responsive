import React from "react";
import { Form } from "react-bootstrap";
import googleicon from "../../../images/icon/google-logo.png";
import facebookicon from "../../../images/icon/facebook.png";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";

export default function Login() {
  const { googleSignIn } = useAuth();

  return (
    <div className="mt-5 container">
      <h1 className="text-center fw-light">Please Login</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex justify-content-between mt-5">
          <button className="btn btn-primary ">Login</button>
          <div>
            <p className="d-inline me-3">New User ? </p>
            <button className="btn btn-danger ">Registration</button>
          </div>
        </div>
      </Form>
      <div>
        <p className="text-center mt-5 text-success">Or SignIn by</p>
        <div className="text-center icon">
          <img
            onClick={googleSignIn}
            className="mx-3"
            src={googleicon}
            alt="google-logo"
          />
          <img className="mx-3" src={facebookicon} alt="" />
        </div>
      </div>
    </div>
  );
}
