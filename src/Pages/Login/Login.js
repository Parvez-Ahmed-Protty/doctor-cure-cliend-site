import React from "react";
import { Col, Container, FloatingLabel, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../Shared/Contact/Contact";
import Navigation from "../Shared/Navigation/Navigation";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="bg-contact">
        <Contact></Contact>
      </div>
      <div className="bg-navigation">
        <Navigation></Navigation>
      </div>
      <div className="my-5">
        <Container>
          <Row>
            <Col sm={12} md={6} className="p-4">
              <img
                className="img-fluid"
                src="https://i.ibb.co/s6r1mnh/login.png"
                alt=""
              />
            </Col>
            <Col sm={12} md={4} className="border p-4">
              <h5>Login Doccure</h5>
              <FloatingLabel
                className="form my-3"
                controlId="floatingInput"
                label="Email address"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                className="form"
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <p className="text-end my-3">
                <small>Forgot Password ?</small>
              </p>
              <button className="btn btn-info w-100 ">Login</button>
              <p className="my-3 text-secondary">
                ----------------- or -----------------
              </p>
              <div>
                <button className="btn btn-danger w-50">Google</button>
                <button className="btn btn-dark w-50">Github</button>
              </div>
              <p className="text-center mt-4">
                Don’t have an account?
                <Nav.Link className="text-danger" as={Link} to="/register">
                  Register
                </Nav.Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
