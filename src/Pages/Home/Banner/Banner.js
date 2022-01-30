import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col sm={12} md={7} lg={7}>
            <h4 className="mb-3">We specialize in Pediatric Care</h4>
            <h1>A SAFE CARE FOR YOUR CHILDREN’s HEALTH</h1>
            <p className="w-75 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Quis
              ipsumpsum.
            </p>
            <button className="btn btn-danger px-4 py-2">
              Make Appointment <BsArrowRightCircleFill></BsArrowRightCircleFill>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
