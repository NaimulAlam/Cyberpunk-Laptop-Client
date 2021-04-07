import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  ModalFooter,
  Row,
  Table,
  Spinner,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import ManageItem from "../ManageItem/ManageItem";
import SideNavbar from "../SideNavbar/SideNavbar";

const Manage = () => {
  const [manageLaptops, setManageLaptops] = useState([]);

  useEffect(() => {
    fetch("https://desolate-dusk-05837.herokuapp.com/laptops")
      .then((res) => res.json())
      .then((data) => {
        setManageLaptops(data);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <SideNavbar />
          </Col>
          <Col xs={12} md={10}>
            {manageLaptops.length === 0 && (
              <Row className="justify-content-md-center m-5 p-5">
                <Col xs md="auto">
                  <Spinner animation="grow" variant="danger" />
                </Col>
              </Row>
            )}
            {manageLaptops.length ? (
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
            ) : (
              <h1>No Record Available. Add Some Laptops First</h1>
            )}
          </Col>
        </Row>
      </Container>
      <ModalFooter>
        <Footer></Footer>
      </ModalFooter>
    </>
  );
};

export default Manage;
