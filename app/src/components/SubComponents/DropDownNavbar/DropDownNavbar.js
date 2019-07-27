import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function DropDownNavbar() {
    return (
        <Navbar bg="light" expand="xl-lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/">Cover Page
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Resume
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">LinkedIn
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Github
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Projects
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Contact Me
                    </Nav.Link>
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default DropDownNavbar;