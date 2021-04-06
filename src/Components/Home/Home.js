import React, { useEffect, useState } from "react";
import Laptop from "../Laptop/Laptop";

import { Container, Row } from "react-bootstrap";

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
        <Row>
          {laptops.map((item) => (
            <Laptop key={item._id} item={item}></Laptop>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
