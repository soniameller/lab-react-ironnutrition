import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class FoodBox extends Component {
 
  render() {
    const food = this.props.food;

    return (
        <Card className="m-2" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={food.image} />
          <Card.Body>
            <Card.Title>{food.name}</Card.Title>
            <Card.Text>{food.calories} cal</Card.Text>
            <Card.Text>{food.quantity}</Card.Text>
            <Button variant="primary" onClick={()=>this.props.addOne(food)}>+ Add </Button>
          </Card.Body>
        </Card>
    );
  }
}
