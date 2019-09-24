import React, { Component } from 'react'
import { Form, Container } from "react-bootstrap";

export default class Search extends Component {
 

  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Control
              onChange={this.props.handleSearch}
              type="text"
              name="search"
              placeholder="Search"
            />
          </Form.Group>
        </Form>
      </Container>

    )
  }
}
