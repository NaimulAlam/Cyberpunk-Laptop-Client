import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import ManageItem from "../ManageItem/ManageItem";
import SideNavbar from "../SideNavbar/SideNavbar";

const Manage = () => {
  const [manageLaptops, setManageLaptops] = useState([]);

  useEffect(() => {
    fetch("https://desolate-dusk-05837.herokuapp.com/laptops")
      .then((res) => res.json())
      .then((data) => setManageLaptops(data));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <SideNavbar />
        </Col>
        <Col xs={12} md={10}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {manageLaptops.map((laptop) => (
                <ManageItem key={laptop._id} item={laptop}></ManageItem>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Manage;
