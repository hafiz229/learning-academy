import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./TopService.css";

const TopService = (props) => {
  const { name, price, img } = props.topservice;
  return (
    <div className="shadow p-3 mb-5 bg-body rounded ">
      <Card className="single-card-design" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price ${price}</Card.Text>
          <Button className="btn btn-primary fw-bold px-4" variant="primary">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopService;
