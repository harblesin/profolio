import React from "react";
import PortfoliosCreated from "../SubComponents/PortfoliosCreated/PortfoliosCreated";
import { Row, Col, Container } from "react-bootstrap";
import LargeLogo from "../SubComponents/Logo/LargeLogo";

function UserSplash() {
  return (
    <Container fluid={true} className="backgroundHead test overflow-auto pb-5">
      <Row>
        <LargeLogo />
      </Row>
      <br/>
      <Row>
        <Col xl="2" lg="2" />
        <Col>
          <PortfoliosCreated />
        </Col>
        <Col xl="2" lg="2" />
      </Row>

    </Container>
  );
}

export default UserSplash;
