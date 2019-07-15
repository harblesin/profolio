import React from "react";
import { Container } from "../Grid/Grid";
import Form from "../SubComponents/Form/Form";
import Button from "../SubComponents/Button/Button";

function NewUser() {
        return (
            <div>
            <Container>
                <Form
                type="submit"
                onClick={() => {}}
                placeholder="Email"
                />
                <Form 
                type="submit"
                onClick={() => {}}
                placeholder="Password"
                />
                <Button 
                   text="TEST2"
                type="button"
                onClick={() => { }}
                className="mdeium primary btn"
                />
                </Container>
            </div>
        )
    }


export default NewUser;