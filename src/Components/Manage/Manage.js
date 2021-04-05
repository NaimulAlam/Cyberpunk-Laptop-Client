import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideNavbar from "../SideNavbar/SideNavbar";

const Manage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} style={{ backgroundColor: "dimgray" }}>
          <SideNavbar />
        </Col>
        <Col xs={12} md={8} >
          <h3>This is Manage Products</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Manage;
