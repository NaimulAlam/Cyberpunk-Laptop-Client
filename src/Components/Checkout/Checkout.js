import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useParams } from "react-router";

const Checkout = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/laptop/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div>
      <Container fluid>
        <h4>Checkout</h4>
        {/* <p>id:{item._id}</p> */}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.brand}</td>
              <td>{item.name}</td>
              <td>1</td>
              <td>{item.price}</td>
            </tr>
            <tr>
              <td colSpan="3">Total</td>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </Table>
        <Button style={{ position: "absolute", right: "20px" }} type="submit">
          Checkout
        </Button>
      </Container>
    </div>
  );
};

export default Checkout;
