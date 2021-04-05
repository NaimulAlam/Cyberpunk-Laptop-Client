import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Manage from "../Manage/Manage";
import SideNavbar from "../SideNavbar/SideNavbar";

const Admin = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} style={{ backgroundColor: "dimgray" }}>
          <SideNavbar />
        </Col>
        <Col xs={12} md={8} style={{ backgroundColor: "lightblue" }}>
          <h1>Select one option</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
