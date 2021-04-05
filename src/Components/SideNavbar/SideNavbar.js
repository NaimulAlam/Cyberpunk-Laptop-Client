import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} style={{ backgroundColor: "dimgray" }}>
          <Nav
            className="sidebar-sticky"
            variant="pills"
            defaultActiveKey="/home"
          >
            <Link to="/manage">Manage</Link>
            <Link to="/addLaptops">Add Laptop</Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SideNavbar;
