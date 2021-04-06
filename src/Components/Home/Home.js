import React, { useEffect, useState } from "react";
import Laptop from "../Laptop/Laptop";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Home = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch("https://desolate-dusk-05837.herokuapp.com/laptops")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  return (
    <>
      <Container fluid>
        {laptops.length === 0 && (
          <Row className="justify-content-md-center m-5 p-5">
            <Col xs md="auto">
              <Spinner animation="grow" variant="danger" />
            </Col>
          </Row>
        )}
        <Row>
          {laptops.map((item) => (
            <Laptop key={item._id} item={item}></Laptop>
          ))}
        </Row>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default Home;
