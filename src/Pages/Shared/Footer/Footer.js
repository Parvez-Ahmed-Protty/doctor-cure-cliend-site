import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiChevronRight, FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="py-5 px-3 footer">
      <Row>
        <Col sm={12} md={3}>
          <img
            className="img-fluid"
            src="https://i.ibb.co/rGnLVWk/footer.png"
            alt=""
          />
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            laudantium nesciunt nihil magnam accusantium eum.
          </p>
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
        <Col sm={12} md={3}>
          <h4>For Doctors</h4>
          <div>
            <p>
              <FiChevronRight className="fs-5 "></FiChevronRight>{" "}
              <span className="icon-hover">Appointments</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Chat</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Login</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Register</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Doctor Dashboard</span>
            </p>
          </div>
        </Col>
        <Col sm={12} md={3}>
          <h4>For Patients</h4>
          <div>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Search for Doctors</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Login</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Register</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Booking</span>
            </p>
            <p>
              <FiChevronRight className="fs-5"></FiChevronRight>{" "}
              <span className="icon-hover">Patient Dashboard</span>
            </p>
          </div>
        </Col>
        <Col sm={12} md={3}>
          <h4 className="mb-4">Contact Us</h4>
          <div>
            <p>
              <FaLocationArrow className="fs-5 me-2"></FaLocationArrow>{" "}
              <span className="icon-hover"> 180, Satirpara, Narsingdi</span>
            </p>
            <p>
              <FaPhoneAlt className="fs-5 me-2"></FaPhoneAlt>{" "}
              <span className="icon-hover">+8801708013921</span>
            </p>
            <p>
              <FiMail className="fs-5 me-2"></FiMail>{" "}
              <span className="icon-hover">doccure@example.com</span>
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <div>
        <p className="text-center">
          <small> &#xA9; 2020 Doccure. All rights reserved.</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
