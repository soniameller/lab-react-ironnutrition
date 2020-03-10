import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

export default class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //This method needs to be bind in the constructor
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //This method with the arrow ES2018 function doesn't to be binded
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Calories</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="number"
              name="calories"
              placeholder="Calories"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="image"
              placeholder="Image Url"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
