import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { UserContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userOrders, setUserOrders] = useState([]);

  //   const [totalPrice setTotalPrice] = useState()
  let total = 0;
  for (let i = 0; i < userOrders.length; i++) {
    const product = userOrders[i];
    total = total + parseInt(product.newOrder.price);
  }

  const handlePayment = () =>{
    console.log("Hello");
  }

  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      });
  }, []);

  return (
    <Container fluid className="my-5">
      <h3>Hello! {loggedInUser.name}</h3>
      <p>
        after finishing your order you will get an confirmation email at 
        {' '}{loggedInUser.email}
      </p>
      <h3>Your have total {userOrders.length} Orders</h3>
      <p>**All Product's price has the tax and shipping included</p>
      <Table striped bordered hover size="sm">
        <tbody>
          {userOrders.map((order) => (
            <tr key={order._id}>
              <td>
                <img className="tdImg" src={order.newOrder.imgUrl} alt="ordered laptop view"></img>
              </td>
              <td>{order.newOrder.name}</td>
              <td>
                Date:{new Date(order.orderTime).toDateString("dd/MM/yyyy")}
              </td>
              <td >${order.newOrder.price}</td>
              <td>Qty:1</td>
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
  );
};

export default Orders;
