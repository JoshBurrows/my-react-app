import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export default class SignUp extends Component {
  render() {
    return (
      <Form>
        <Container>
          <Form.Group className="mb-3" controlId="SignupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="Username" placeholder="Choose username" />
            <Form.Text className="text-muted">
              Username should be between 8 and 15 characters
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="SignupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="SignupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="RememberMeCheckbox">
            <Form.Check type="checkbox" label="Remember this device" />
          </Form.Group>
          <Container className="w-100 d-flex justify-content-between">
            <Button
              className=""
              id="SignupSubmitBtn"
              variant="dark"
              type="submit"
            >
              Submit
            </Button>
            <Button className="" id="ToLoginBtn" variant="dark" type="submit">
              Already a member
            </Button>
          </Container>
        </Container>
      </Form>
    );
  }
}
