import React from "react";
import { Form } from "react-bootstrap";

function Email(props) {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        </Form>
    );
};

export default Email;