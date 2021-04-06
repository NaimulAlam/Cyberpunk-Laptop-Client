import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import {useHistory} from 'react-router';
import './Laptop.css';

const Laptop = (props) => {

  const {_id, name, price, imgUrl} = props.item;

  const history = useHistory();

  const handleClick = () => {
      const url = `/laptop/${_id}`;
      history.push(url)
  }

  return (
    <Col lg={4} md={6} xs={12}>
      <Card className="cardDesign">
        <Card.Img className="imgBG" variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button onClick={() => handleClick(_id)} variant="primary">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Laptop;
