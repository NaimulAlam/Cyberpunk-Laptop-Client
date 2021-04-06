import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

import SideNavbar from "../SideNavbar/SideNavbar";

const Admin = () => {
  return (
    <Container fluid>
      <Row style={{textAlign: 'center'}}>
        <Col xs={12}>
          <SideNavbar />
        </Col>
        <Col xs={12}>
          <h1>Please Select an Option</h1>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
};

export default Admin;
