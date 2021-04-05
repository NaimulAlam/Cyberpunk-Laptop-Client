import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    }).then((res) => console.log("server response", res));
  };

  const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
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

  //   console.log(watch("name", "brand", "price"));

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} style={{ backgroundColor: "dimgray" }}>
          <SideNavbar></SideNavbar>
        </Col>
        <Col xs={12} md={8} >
          <h1>This is place for adding laptops</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              defaultValue="New Gaming Laptop"
              ref={register}
            />
            <br />
            <input name="brand" defaultValue="Brand Name" ref={register} />
            <br />
            <input name="price" defaultValue="500" ref={register} />
            <br />
            <input
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Laptops;
