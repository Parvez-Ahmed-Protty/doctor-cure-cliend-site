import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";
import "./OurTreatment.css";

const OurTreatment = () => {
  return (
    <div className="treatment py-5">
      <Container>
        <Row className="d-flex align-items-center">
          <Col sm={12} md={6} lg={6}>
            <img
              className="img-fluid rounded"
              src="https://i.ibb.co/PjcZrsw/treatment.jpg"
              alt=""
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h5 className="text-danger">We Care for you & your Children</h5>
              <h3 className="fw-bold my-3">Most Effective Treatment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip lobortis nisl ut aliquip lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore aliquam .
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <FiChevronRight className="fs-5 text-danger"></FiChevronRight>{" "}
                  <span>Patient Dashboard</span>
                </p>
                <p>
                  <FiChevronRight className="fs-5 text-danger"></FiChevronRight>{" "}
                  <span>Patient Dashboard</span>
                </p>
                <p>
                  <FiChevronRight className="fs-5 text-danger"></FiChevronRight>{" "}
                  <span>Patient Dashboard</span>
                </p>
              </div>
              <div>
                <p>
                  <FiChevronRight className="fs-5 text-danger"></FiChevronRight>{" "}
                  <span>Patient Dashboard</span>
                </p>
                <p>
                  <FiChevronRight className="fs-5 text-danger"></FiChevronRight>{" "}
                  <span>Patient Dashboard</span>
                </p>
                <p>
                  <FiChevronRight className="fs-5 text-danger"></FiChevronRight>{" "}
                  <span>Patient Dashboard</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTreatment;
