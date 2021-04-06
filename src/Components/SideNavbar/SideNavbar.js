import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideNavbar.css";
import manageIcn from "../../icons/grid 1.png";
import plusIcn from "../../icons/plus 1.png";

const SideNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} >
          <Button className="btnGap" variant="primary">
            <Link className="linkStyle" to="/manage">
              <img src={manageIcn} alt=""/> Manage
            </Link>
          </Button> 
          <Button className="btnGap" variant="primary">
            <Link className="linkStyle" to="/addLaptops">
            <img src={plusIcn} alt=""/> Add Laptop
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SideNavbar;
