import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
export default class Login extends Component {
  render() {
    return (
      <Form>
        <Container>
          <Form.Group className="mb-3" controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username" />
            <Form.Text className="text-muted">
              Please enter a valid username
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Checkbox">
            <Form.Check type="checkbox" label="Remember this device" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    );
  }
}
