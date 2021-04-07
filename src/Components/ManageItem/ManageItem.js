import React, { useState } from "react";
import { Button } from "react-bootstrap";
import deleteIcn from "../../icons/deleteIcn.png";
import "./ManageItem.css";

const ManageItem = (props) => {
  const { _id, brand, name, price } = props.item;

  const [status, setStatus] = useState(null);

  function deleteProduct() {
    fetch(`https://desolate-dusk-05837.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setStatus({
            display: 'none'
          });
          alert("The Laptop Deleted Successfully");
        } else {
          alert("Delete Failed or Already Deleted");
        }
      });
  }

  return (
    <tr style={status}>
      <td>{brand}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td className="deleteButton">
        <Button onClick={() => deleteProduct(_id)}>
          <img className="deleteIcnSize" src={deleteIcn} alt="delete" />
        </Button>
      </td>
    </tr>
  );
};

export default ManageItem;
