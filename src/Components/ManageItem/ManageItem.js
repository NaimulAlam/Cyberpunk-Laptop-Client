import React from "react";
import { Button } from "react-bootstrap";
import deleteIcn from "../../icons/deleteIcn.png";
import "./ManageItem.css";

const ManageItem = (props) => {
  const { _id, brand, name, price } = props.item;

  function deleteProduct() {
    fetch(`https://desolate-dusk-05837.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert('The Laptop Deleted Successfully')
        }
      });
  }

  return (
    <tr>
      <td>{brand}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td className="deletebtn">
        <Button onClick={() => deleteProduct(_id)}>
          <img className="deleteIcnSize" src={deleteIcn} alt="delete" />
        </Button>
      </td>
    </tr>
  );
};

export default ManageItem;
