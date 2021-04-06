import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideNavbar from "../SideNavbar/SideNavbar";

const Laptops = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imgUrl, setImgUrl] = useState({});

  const onSubmit = (data) => {
    const laptopData = {
      name: data.name,
      brand: data.brand,
      price: data.price,
      imgUrl: imgUrl,
    };

    const url = `http://localhost:5000/addLaptop`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(laptopData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Saved Successfully");
        }
      });
  };

  const handleImageUpload = (event) => {
    const imgData = new FormData();
    imgData.set("key", "b7d1f7ea94e0d0890ce2429fdf90f279");
    imgData.append("image", event.target.files[0]);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data.data.display_url);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <SideNavbar></SideNavbar>
        </Col>
        <Col xs={12} md={10}>
          <Col>
            <h1>This is place for adding laptops</h1>
          </Col>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Control
                    required
                    name="name"
                    placeholder="Laptop Description"
                    ref={register}
                  />
                  <br />
                </Col>
                <Col>
                  <Form.Control
                    required
                    name="brand"
                    placeholder="Brand Name"
                    ref={register}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    required
                    name="price"
                    placeholder="Price"
                    ref={register}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="uploadBtn"
                    required
                    name="imgUrl"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 6 }}>
                  <Button type="submit">Save</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Laptops;
