import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const Checkout = () => {
  const [loggedInUser] = useContext(UserContext);

  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("https://desolate-dusk-05837.herokuapp.com/laptop/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const handleCheckout = () => {
    const newOrder = { ...loggedInUser, newOrder: item, orderTime: new Date() };
    fetch("https://desolate-dusk-05837.herokuapp.com/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Placed Successfully");
        }
      });
  };

  return (
    <div>
      <Container className="mt-5" fluid >
        <div className="mx-5">
        <h4 className="mb-3">Checkout</h4>
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
        <Button
          onClick={handleCheckout}
          style={{ position: "absolute", right: "70px" }}
          type="submit"
        >
          Checkout
        </Button>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
