import React from "react";
import { Form } from "react-bootstrap";

function Password(props) {
    return (
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    );
};

export default Password;
