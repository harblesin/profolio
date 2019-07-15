import React, { Component } from "react";
// components that are imported to this page
import AboutUs from "../components/AboutUs/AboutUs";
import { Col, Row, Container } from "../components/Grid/Grid";

class About extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col size="lg-12">
                        <div>
                            <h1 className="jumbotron">About Us</h1>
                        </div>
                    </Col>
                </Row>
                <Container fluid>
                        <AboutUs />
                </Container>
            </div>
        )
    };
};

export default About;