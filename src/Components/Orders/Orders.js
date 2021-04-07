import React, { useContext, useEffect, useState } from "react";
import { Button, Container, ModalFooter, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../Footer/Footer";
import "./Orders.css";

const Orders = () => {
  const [loggedInUser] = useContext(UserContext);
  const [userOrders, setUserOrders] = useState([]);

  //   const [totalPrice setTotalPrice] = useState()
  let total = 0;
  for (let i = 0; i < userOrders.length; i++) {
    const product = userOrders[i];
    total = total + parseInt(product.newOrder.price);
  }

  const handlePayment = () => {
    alert("Payment gateway under process");
  };

  useEffect(() => {
    fetch(
      "https://desolate-dusk-05837.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      });
  }, [loggedInUser]);

  return (
    <>
      <Container style={{ textAlign: "center" }} className="my-5" fluid>
        <Container fluid>
          <h2> Welcome! {loggedInUser.name} to your Order Summery</h2>
          <h4>There {userOrders.length} orders you have made</h4>
          <p>
            Please ensure this is you email:{" "}
            <span style={{ color: "blue" }}>{loggedInUser.email}</span> to
            receive your order confirmation
          </p>
          <p>
            <small>
              **All the products includes tax and shipment within this country
            </small>
          </p>
        </Container>
        {userOrders.length > 0 ? (
          <Container className="my-5" fluid>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr style={{backgroundColor: "#03fcf8"}}>
                  <td>Image</td>
                  <td>Description</td>
                  <td>Date</td>
                  <td>Quantity</td>
                  <td>Price</td>
                </tr>
                {userOrders &&
                  userOrders.map((order) => (
                    <tr key={order._id}>
                      <td>
                        <img
                          className="tdImg"
                          src={order.newOrder.imgUrl}
                          alt="ordered laptop"
                        ></img>
                      </td>
                      <td>{order.newOrder.name}</td>
                      <td>
                        {new Date(order.orderTime).toDateString("dd/MM/yyyy")}
                      </td>
                      <td>1</td>
                      <td>${order.newOrder.price}</td>
                    </tr>
                  ))}
                <tr>
                  <td colSpan="2"></td>
                  <td>Total Price</td>
                  <td colSpan="2">${total}</td>
                </tr>
              </tbody>
            </Table>
            <Button onClick={() => handlePayment()}>Proceed to Payment</Button>
          </Container>
        ) : (
          <Container className="my-5" fluid>
            <h2>
              You did not made any orders yet. please select some orders first
            </h2>
            <Link to="/">
              <Button className="my-3" variant="primary">
                Choose a Product
              </Button>
            </Link>
          </Container>
        )}
      </Container>
      <ModalFooter>
        <Footer></Footer>
      </ModalFooter>
    </>
  );
};

export default Orders;
