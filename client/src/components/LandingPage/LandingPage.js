import React from "react";
import { Row, Container } from "../Grid/Grid";
import Email from "../SubComponents/Email/Email";
import Password from "../SubComponents/Password/Password";


function LandingPage() {
  return (
    <div>
      <h1 className="jumbotron">PROFOLIO</h1>
      <div>
        <Container>
          <Row>
            <Email />
            <Password />
          </Row>
        </Container>
      </div>
    </div >
  );
};

export default LandingPage;
