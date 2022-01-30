import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="p-3">
      <Row>
        <Col sm={12} md={3} lg={3}>
          <small className="m-0">Contact Number : 01708013921</small>
        </Col>

        <Col sm={12} md={3} lg={3}>
          <small className="m-0 ">Location : 180, Satirpara, Narsingdi</small>
        </Col>
        <Col sm={12} md={6} lg={6} className="text-end">
          <div>
            <a href="https://www.linkedin.com/in/parvez-ahmed-prottoy-450a55226/">
              <FaFacebookF className="FaFacebookF"></FaFacebookF>
            </a>
            <a href="https://www.linkedin.com/in/parvez-ahmed-prottoy-450a55226/">
              <FaYoutube className="ms-3 fs-5 FaYoutube"></FaYoutube>
            </a>
            <a href="https://www.linkedin.com/in/parvez-ahmed-prottoy-450a55226/">
              <FaLinkedinIn className="ms-3 fs-5 FaLinkedinIn"></FaLinkedinIn>
            </a>
            <a href="https://www.linkedin.com/in/parvez-ahmed-prottoy-450a55226/">
              <FaTwitter className="ms-3 fs-5 FaTwitter"></FaTwitter>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
